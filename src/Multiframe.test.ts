/**
 * Multi-frame round-trip tests.
 *
 * Each test parses a real, openly licensed multi-frame sample (see
 * fixtures/multiframe/README.md), anonymises it, writes it, and then checks
 * the written bytes with a small encapsulation walker that is independent of
 * the library's own parser. The checks are the ones a viewer needs:
 *
 *   - Pixel Data survives byte-for-byte (per frame for encapsulated data),
 *   - the number of frames a reader can locate equals (0028,0008),
 *   - the parser does not inflate pixel data with buffer slack,
 *   - Enhanced IODs keep their functional-group sequences.
 *
 * Encapsulated pixel data layout is PS3.5 Annex A.4: a Basic Offset Table
 * item, one item per fragment, then a Sequence Delimitation Item.
 */
import DicomMessage, { TagDict } from "./Message";
import anonymize from "./Anon";
import ValueRepresentation from "./ValueRepresentation";
import { WriteBufferStream } from "./BufferStream";
import * as Index from "./index";
import policyFor from "./Policies";
import { supportedSOPClasses } from "./Validator";
import * as fs from "fs";
import * as path from "path";

const FIXTURES = path.join(__dirname, "..", "fixtures", "multiframe");

function readFixture(name: string): ArrayBuffer {
  const b = fs.readFileSync(path.join(FIXTURES, name));
  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
}

/** Raw (7FE0,0010) as found on disk, located without using the library. */
type RawPixelData = {
  vr: string;
  undefinedLength: boolean;
  /** Native: the value bytes. Encapsulated: unused. */
  value: Uint8Array;
  /** Encapsulated: Basic Offset Table entries. */
  offsets: number[];
  /** Encapsulated: fragment payloads in order. */
  fragments: Uint8Array[];
};

/**
 * Locate the Pixel Data element header in an Explicit VR Little Endian file
 * and walk its value. Encapsulated layout (PS3.5 A.4):
 *   (FFFE,E000) len  [Basic Offset Table]
 *   (FFFE,E000) len  fragment ...
 *   (FFFE,E0DD) 0
 */
function pixelDataHeaderAt(u8: Uint8Array): number {
  let at = -1;
  for (let i = 132; i < u8.length - 8; i++) {
    if (
      u8[i] == 0xe0 && u8[i + 1] == 0x7f && u8[i + 2] == 0x10 && u8[i + 3] == 0x00 &&
      u8[i + 4] == 0x4f /* O */ && (u8[i + 5] == 0x42 /* B */ || u8[i + 5] == 0x57 /* W */) &&
      u8[i + 6] == 0 && u8[i + 7] == 0
    ) {
      at = i;
      break;
    }
  }
  if (at < 0) throw new Error("Pixel Data (7FE0,0010) not found");
  return at;
}

function rawPixelData(buf: ArrayBuffer): RawPixelData {
  const u8 = new Uint8Array(buf);
  const dv = new DataView(buf);
  const at = pixelDataHeaderAt(u8);
  const vr = String.fromCharCode(u8[at + 4], u8[at + 5]);
  const length = dv.getUint32(at + 8, true);
  let pos = at + 12;
  if (length != 0xffffffff) {
    return {
      vr,
      undefinedLength: false,
      value: u8.subarray(pos, pos + length),
      offsets: [],
      fragments: [],
    };
  }
  const itemTag = (p: number) => dv.getUint16(p, true) == 0xfffe ? dv.getUint16(p + 2, true) : 0;
  if (itemTag(pos) != 0xe000) throw new Error("Basic Offset Table item missing");
  const botLength = dv.getUint32(pos + 4, true);
  const offsets: number[] = [];
  for (let k = 0; k < botLength / 4; k++) offsets.push(dv.getUint32(pos + 8 + 4 * k, true));
  pos += 8 + botLength;
  const fragments: Uint8Array[] = [];
  while (itemTag(pos) == 0xe000) {
    const len = dv.getUint32(pos + 4, true);
    fragments.push(u8.subarray(pos + 8, pos + 8 + len));
    pos += 8 + len;
  }
  if (itemTag(pos) != 0xe0dd) throw new Error("Sequence Delimitation Item missing after fragments");
  return { vr, undefinedLength: true, value: new Uint8Array(0), offsets, fragments };
}

/**
 * Split fragments into frames without decoding (PS3.5 A.4 and 8.2): by the
 * Basic Offset Table when present; otherwise, for a single frame, all
 * fragments; otherwise one fragment per frame when the fragment and frame
 * counts agree (the 8.2 comparison). Returns null otherwise: a reader would
 * then have to find frame boundaries in the codec stream, which this
 * helper does not do.
 */
function framesOf(raw: RawPixelData, numberOfFrames: number): Uint8Array[] | null {
  const concat = (parts: Uint8Array[]) => {
    const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
    let o = 0;
    for (const p of parts) { out.set(p, o); o += p.length; }
    return out;
  };
  if (raw.offsets.length > 0) {
    const frames: Uint8Array[][] = [];
    let offset = 0;
    for (const frag of raw.fragments) {
      if (raw.offsets.indexOf(offset) != -1) frames.push([]);
      if (frames.length == 0) return null;
      frames[frames.length - 1].push(frag);
      offset += 8 + frag.length;
    }
    return frames.map(concat);
  }
  if (numberOfFrames == 1) return [concat(raw.fragments)];
  if (raw.fragments.length == numberOfFrames) return raw.fragments.slice();
  return null;
}

function sumBytes(fragments: Uint8Array[]): number {
  return fragments.reduce((n, f) => n + f.length, 0);
}

function parsedPixelBytes(dict: TagDict): number {
  const values = dict["7FE00010"].Value as Array<ArrayBuffer>;
  return values.reduce((n, v) => n + v.byteLength, 0);
}

function numberOfFrames(dict: TagDict): number {
  const nf = dict["00280008"];
  return nf ? parseInt(String(nf.Value[0]), 10) : 1;
}

/**
 * Replace the encapsulated Pixel Data value of a fixture with synthetic
 * fragments of the given (even) lengths, one fragment per frame, and either
 * a full Basic Offset Table or an empty one. The payload is a deterministic
 * byte pattern: the anonymiser never decodes pixel data, so only the
 * encapsulation is under test. Everything before and after Pixel Data is
 * kept as is.
 */
function withSyntheticFrames(name: string, frameLengths: number[], withTable: boolean): ArrayBuffer {
  const input = readFixture(name);
  const u8 = new Uint8Array(input);
  const dv = new DataView(input);
  const at = pixelDataHeaderAt(u8);
  if (dv.getUint32(at + 8, true) != 0xffffffff) throw new Error("fixture pixel data is not encapsulated");
  let end = at + 12;
  while (dv.getUint16(end + 2, true) == 0xe000) end += 8 + dv.getUint32(end + 4, true);
  end += 8; // the Sequence Delimitation Item
  const parts: number[] = [];
  const u32 = (v: number) => parts.push(v & 0xff, (v >>> 8) & 0xff, (v >>> 16) & 0xff, (v >>> 24) & 0xff);
  const item = (tag: number, length: number) => { u32(0xfffe | (tag << 16)); u32(length); };
  const offsets: number[] = [];
  let offset = 0;
  for (const len of frameLengths) { offsets.push(offset); offset += 8 + len; }
  item(0xe000, withTable ? 4 * offsets.length : 0);
  if (withTable) offsets.forEach(u32);
  let seed = 12345;
  for (const len of frameLengths) {
    item(0xe000, len);
    for (let k = 0; k < len; k++) {
      seed = (seed * 1103515245 + 12345) >>> 0;
      parts.push(seed >>> 24);
    }
  }
  item(0xe0dd, 0);
  const out = new Uint8Array(at + 12 + parts.length + (u8.length - end));
  out.set(u8.subarray(0, at + 12), 0);
  out.set(parts, at + 12);
  out.set(u8.subarray(end), at + 12 + parts.length);
  return out.buffer;
}

function roundTrip(name: string) {
  return roundTripBuffer(readFixture(name));
}

function roundTripBuffer(input: ArrayBuffer) {
  const dcm = DicomMessage.readFile(input);
  const anon = anonymize(dcm.dict);
  const output = dcm.write(anon);
  const reread = DicomMessage.readFile(output);
  return { input, dcm, anon, output, reread };
}

function expectFramesIdentical(name: string) {
  expectFramesIdenticalIn(readFixture(name));
}

function expectFramesIdenticalIn(file: ArrayBuffer) {
  const { input, dcm, output, reread } = roundTripBuffer(file);
  const nf = numberOfFrames(dcm.dict);
  const inRaw = rawPixelData(input);
  const outRaw = rawPixelData(output);
  const inFrames = framesOf(inRaw, nf);
  expect(inFrames).not.toBeNull();
  expect(inFrames!.length).toBe(nf);

  expect(numberOfFrames(reread.dict)).toBe(nf);
  const outFrames = framesOf(outRaw, nf);
  expect(outFrames).not.toBeNull();
  expect(outFrames!.length).toBe(nf);
  for (let i = 0; i < nf; i++) {
    expect(outFrames![i].length).toBe(inFrames![i].length);
    expect(Buffer.compare(outFrames![i], inFrames![i])).toBe(0);
  }
}

describe("Multi-frame DICOM round trip (parse → anonymise → write → re-parse)", () => {
  describe("examples_ybr_color.dcm: Ultrasound Multi-frame, JPEG Baseline, 30 frames, Basic Offset Table with 30 entries", () => {
    const name = "examples_ybr_color.dcm";

    it("parses pixel data without inflating it (bytes read == bytes in the fragments)", () => {
      const raw = rawPixelData(readFixture(name));
      expect(raw.offsets.length).toBe(30);
      const dcm = DicomMessage.readFile(readFixture(name));
      expect(parsedPixelBytes(dcm.dict)).toBe(sumBytes(raw.fragments));
    });

    it("writes a Basic Offset Table with one entry per frame", () => {
      const { output } = roundTrip(name);
      expect(rawPixelData(output).offsets.length).toBe(30);
    });

    it("keeps all 30 frames byte-identical and locatable", () => {
      expectFramesIdentical(name);
    });
  });

  describe("emri_small_jpeg_2k_lossless.dcm: Enhanced MR, JPEG 2000 Lossless, 10 frames, empty Basic Offset Table (one fragment per frame)", () => {
    const name = "emri_small_jpeg_2k_lossless.dcm";

    it("parses pixel data without inflating it", () => {
      const raw = rawPixelData(readFixture(name));
      expect(raw.offsets.length).toBe(0);
      expect(raw.fragments.length).toBe(10);
      const dcm = DicomMessage.readFile(readFixture(name));
      expect(parsedPixelBytes(dcm.dict)).toBe(sumBytes(raw.fragments));
    });

    it("keeps one fragment per frame so frames stay locatable without an offset table", () => {
      const { output } = roundTrip(name);
      const outRaw = rawPixelData(output);
      // Either a full offset table or exactly one fragment per frame is acceptable.
      const locatable = outRaw.offsets.length == 10 || outRaw.fragments.length == 10;
      expect(locatable).toBe(true);
    });

    it("keeps all 10 frames byte-identical", () => {
      expectFramesIdentical(name);
    });
  });

  describe("SC_rgb_rle_2frame.dcm: RLE Lossless, 2 frames, Basic Offset Table with 2 entries", () => {
    const name = "SC_rgb_rle_2frame.dcm";

    it("keeps both frames byte-identical and locatable", () => {
      expectFramesIdentical(name);
    });

    it("keeps each RLE frame in a single fragment (RLE forbids splitting a frame across fragments)", () => {
      const { output } = roundTrip(name);
      const outRaw = rawPixelData(output);
      expect(outRaw.fragments.length).toBe(2);
    });
  });

  describe("US1_J2KR.dcm: single frame, JPEG 2000 Lossless, 3 fragments, empty Basic Offset Table", () => {
    const name = "US1_J2KR.dcm";

    it("parses pixel data without inflating it (the frame is the fragments joined, nothing more)", () => {
      const raw = rawPixelData(readFixture(name));
      expect(raw.fragments.length).toBe(3);
      const dcm = DicomMessage.readFile(readFixture(name));
      expect(parsedPixelBytes(dcm.dict)).toBe(sumBytes(raw.fragments));
    });

    it("keeps the frame byte-identical", () => {
      expectFramesIdentical(name);
    });
  });

  describe("Frames larger than 20 KB: SC_rgb_rle_2frame.dcm with 2 synthetic fragments of 24,000 and 30,002 bytes", () => {
    const name = "SC_rgb_rle_2frame.dcm";
    const lengths = [24000, 30002];

    it("with a 2-entry Basic Offset Table: keeps one fragment per frame, the table verbatim and the frames byte-identical", () => {
      const input = withSyntheticFrames(name, lengths, true);
      expect(rawPixelData(input).offsets).toEqual([0, 24008]);
      expectFramesIdenticalIn(input);
      const outRaw = rawPixelData(roundTripBuffer(input).output);
      expect(outRaw.offsets).toEqual([0, 24008]);
      expect(outRaw.fragments.map((f) => f.length)).toEqual(lengths);
    });

    it("with an empty Basic Offset Table: keeps one fragment per frame and the frames byte-identical", () => {
      const input = withSyntheticFrames(name, lengths, false);
      expect(rawPixelData(input).offsets).toEqual([]);
      expectFramesIdenticalIn(input);
      const outRaw = rawPixelData(roundTripBuffer(input).output);
      expect(outRaw.fragments.map((f) => f.length)).toEqual(lengths);
    });
  });

  describe("eCT_Supplemental.dcm: Enhanced CT, native (Explicit VR LE), 2 frames, Shared and Per-frame Functional Groups", () => {
    const name = "eCT_Supplemental.dcm";

    it("parses nested functional-group sequences", () => {
      const dcm = DicomMessage.readFile(readFixture(name));
      const perFrame = dcm.dict["52009230"].Value as Array<TagDict>;
      expect(perFrame.length).toBe(2);
      const position = (perFrame[1]["00209113"].Value[0] as TagDict)["00200032"].Value;
      expect(position).toEqual(["99.5000", "-301.500", "-149.000"]);
    });

    it("keeps native multi-frame pixel data byte-identical with the frame count preserved", () => {
      const { input, dcm, output, reread } = roundTrip(name);
      expect(numberOfFrames(dcm.dict)).toBe(2);
      expect(numberOfFrames(reread.dict)).toBe(2);
      const inRaw = rawPixelData(input);
      const outRaw = rawPixelData(output);
      expect(outRaw.value.length).toBe(inRaw.value.length);
      expect(Buffer.compare(outRaw.value, inRaw.value)).toBe(0);
    });

    it("keeps the Shared and Per-frame Functional Groups Sequences the Enhanced CT IOD requires (Type 1)", () => {
      const { anon, reread } = roundTrip(name);
      expect(anon["52009229"]).toBeDefined();
      expect(anon["52009230"]).toBeDefined();
      expect((reread.dict["52009229"].Value as Array<TagDict>).length).toBe(1);
      const perFrame = reread.dict["52009230"].Value as Array<TagDict>;
      expect(perFrame.length).toBe(2);
      // Geometry needed to display the frames must survive; identifiers inside must not.
      expect((perFrame[0]["00209113"].Value[0] as TagDict)["00200032"]).toBeDefined();
    });
  });
});

/* ------------------------------------------------------------------------ *
 * Encapsulation contract: reader checks, writer table validation, Tag
 * encapsulation scope, Extended Offset Table, API shape.
 * ------------------------------------------------------------------------ */

type EncapsulatedSpec = {
  /** Fragment payload lengths, in file order. */
  fragments: number[];
  /** Basic Offset Table entries (omit or [] for an empty table). */
  table?: number[];
  /** Raw Basic Offset Table bytes, used instead of `table` when given. */
  tableBytes?: number[];
  /** Length written in the Sequence Delimitation Item (default 0). */
  delimiterLength?: number;
  /** Bytes inserted before (7FE0,0010), e.g. another element. */
  before?: number[];
};

/**
 * Rebuild a fixture's encapsulated Pixel Data from a spec. Everything outside
 * Pixel Data is kept; payload bytes are a deterministic pattern (the
 * anonymiser never decodes pixel data).
 */
function withEncapsulated(name: string, spec: EncapsulatedSpec): ArrayBuffer {
  const input = readFixture(name);
  const u8 = new Uint8Array(input);
  const dv = new DataView(input);
  const at = pixelDataHeaderAt(u8);
  if (dv.getUint32(at + 8, true) != 0xffffffff) throw new Error("fixture pixel data is not encapsulated");
  let end = at + 12;
  while (dv.getUint16(end + 2, true) == 0xe000) end += 8 + dv.getUint32(end + 4, true);
  end += 8;
  const parts: number[] = [];
  const u32 = (v: number) => parts.push(v & 0xff, (v >>> 8) & 0xff, (v >>> 16) & 0xff, (v >>> 24) & 0xff);
  const item = (tag: number, length: number) => { u32(0xfffe | (tag << 16)); u32(length); };
  if (spec.tableBytes) {
    item(0xe000, spec.tableBytes.length);
    parts.push(...spec.tableBytes);
  } else {
    const table = spec.table || [];
    item(0xe000, 4 * table.length);
    table.forEach(u32);
  }
  let seed = 777;
  for (const len of spec.fragments) {
    item(0xe000, len);
    for (let k = 0; k < len; k++) {
      seed = (seed * 1103515245 + 12345) >>> 0;
      parts.push(seed >>> 24);
    }
  }
  item(0xe0dd, spec.delimiterLength || 0);
  const before = spec.before || [];
  const out = new Uint8Array(at + before.length + 12 + parts.length + (u8.length - end));
  out.set(u8.subarray(0, at), 0);
  out.set(before, at);
  out.set(u8.subarray(at, at + 12), at + before.length);
  out.set(parts, at + before.length + 12);
  out.set(u8.subarray(end), at + before.length + 12 + parts.length);
  return out.buffer;
}

/** Byte offset of the first fragment item header after the table, in a buffer. */
function firstFragmentAt(buf: ArrayBuffer): number {
  const dv = new DataView(buf);
  const at = pixelDataHeaderAt(new Uint8Array(buf));
  return at + 12 + 8 + dv.getUint32(at + 12 + 4, true);
}

/** Position just after the last fragment item (where the delimiter starts). */
function delimiterAt(buf: ArrayBuffer): number {
  const dv = new DataView(buf);
  let pos = firstFragmentAt(buf);
  while (dv.getUint16(pos, true) == 0xfffe && dv.getUint16(pos + 2, true) == 0xe000) {
    pos += 8 + dv.getUint32(pos + 4, true);
  }
  return pos;
}

/** Assert fn throws the library's typed encapsulation error with this code. */
function expectEncapsulationError(fn: () => unknown, code: string) {
  let caught: any = undefined;
  try {
    fn();
  } catch (e) {
    caught = e;
  }
  expect(caught).toBeDefined();
  expect(caught && caught.name).toBe("EncapsulationError");
  expect(caught && caught.code).toBe(code);
}

/** Explicit VR LE element bytes with a 4-byte length (OB/OW/OV/UN style). */
function longElement(group: number, element: number, vr: string, value: number[]): number[] {
  const out: number[] = [group & 0xff, group >> 8, element & 0xff, element >> 8, vr.charCodeAt(0), vr.charCodeAt(1), 0, 0];
  const n = value.length;
  out.push(n & 0xff, (n >>> 8) & 0xff, (n >>> 16) & 0xff, (n >>> 24) & 0xff);
  return out.concat(value);
}

function u64le(values: number[]): number[] {
  const out: number[] = [];
  for (const v of values) {
    const lo = v >>> 0, hi = Math.floor(v / 0x100000000);
    out.push(lo & 0xff, (lo >>> 8) & 0xff, (lo >>> 16) & 0xff, lo >>> 24, hi & 0xff, (hi >>> 8) & 0xff, (hi >>> 16) & 0xff, hi >>> 24);
  }
  return out;
}

describe("Encapsulated Pixel Data reader rejects malformed encodings with a typed error (PS3.5 A.4)", () => {
  const name = "SC_rgb_rle_2frame.dcm";

  it("rejects a Basic Offset Table whose length is not a multiple of 4", () => {
    const buf = withEncapsulated(name, { fragments: [100, 100], tableBytes: [0, 0, 0, 0, 0x6c, 0] });
    expectEncapsulationError(() => DicomMessage.readFile(buf), "OFFSET_TABLE_LENGTH");
  });

  it("rejects a Basic Offset Table length of FFFFFFFF", () => {
    const buf = readFixture("examples_ybr_color.dcm");
    const at = pixelDataHeaderAt(new Uint8Array(buf));
    new DataView(buf).setUint32(at + 12 + 4, 0xffffffff, true);
    expectEncapsulationError(() => DicomMessage.readFile(buf), "OFFSET_TABLE_LENGTH");
  });

  it("rejects a Basic Offset Table that runs past the end of the data", () => {
    const buf = withEncapsulated(name, { fragments: [100, 100], table: [0, 108] });
    const at = pixelDataHeaderAt(new Uint8Array(buf));
    new DataView(buf).setUint32(at + 12 + 4, 0x7ffffff0, true);
    expectEncapsulationError(() => DicomMessage.readFile(buf), "ITEM_PAST_END");
  });

  it("rejects a fragment whose length runs past the end of the data", () => {
    const buf = readFixture("US1_J2KR.dcm");
    const first = firstFragmentAt(buf);
    new DataView(buf).setUint32(first + 4, 0x7ffffff0, true);
    expectEncapsulationError(() => DicomMessage.readFile(buf), "ITEM_PAST_END");
  });

  it("rejects an odd fragment length", () => {
    const buf = withEncapsulated(name, { fragments: [101, 100], table: [0, 109] });
    expectEncapsulationError(() => DicomMessage.readFile(buf), "FRAGMENT_LENGTH_ODD");
  });

  it("rejects a zero-length fragment (PS3.5 A.4: an even number of bytes greater or equal to two)", () => {
    const buf = withEncapsulated(name, { fragments: [0, 100], table: [0, 8] });
    expectEncapsulationError(() => DicomMessage.readFile(buf), "FRAGMENT_LENGTH_ZERO");
  });

  it("rejects an undefined (FFFFFFFF) fragment length", () => {
    const buf = withEncapsulated(name, { fragments: [100, 100], table: [0, 108] });
    new DataView(buf).setUint32(firstFragmentAt(buf) + 4, 0xffffffff, true);
    expectEncapsulationError(() => DicomMessage.readFile(buf), "FRAGMENT_LENGTH_UNDEFINED");
  });

  it("rejects data that ends before the Sequence Delimitation Item", () => {
    const buf = withEncapsulated(name, { fragments: [100, 100], table: [0, 108] });
    const truncated = buf.slice(0, delimiterAt(buf));
    expectEncapsulationError(() => DicomMessage.readFile(truncated), "DELIMITER_MISSING");
  });

  it("rejects a non-item tag where the Sequence Delimitation Item belongs", () => {
    const buf = withEncapsulated(name, { fragments: [100, 100], table: [0, 108] });
    const dv = new DataView(buf);
    const pos = delimiterAt(buf);
    dv.setUint16(pos, 0x0009, true);
    dv.setUint16(pos + 2, 0x0010, true);
    expectEncapsulationError(() => DicomMessage.readFile(buf), "DELIMITER_MISSING");
  });

  it("rejects a Sequence Delimitation Item with a non-zero length", () => {
    const buf = withEncapsulated(name, { fragments: [100, 100], table: [0, 108], delimiterLength: 4 });
    expectEncapsulationError(() => DicomMessage.readFile(buf), "DELIMITER_LENGTH");
  });

  it.each([0, 1, 2, 3, 4, 5, 6, 7])(
    "rejects data that ends %i bytes into the Basic Offset Table item header",
    (k) => {
      const buf = withEncapsulated(name, { fragments: [100, 100], table: [0, 108] });
      const at = pixelDataHeaderAt(new Uint8Array(buf));
      const truncated = buf.slice(0, at + 12 + k);
      expectEncapsulationError(() => DicomMessage.readFile(truncated), "ITEM_PAST_END");
    }
  );

  it("rejects undefined-length pixel data that does not start with an item", () => {
    const buf = withEncapsulated(name, { fragments: [100, 100], table: [0, 108] });
    const at = pixelDataHeaderAt(new Uint8Array(buf));
    new DataView(buf).setUint16(at + 12 + 2, 0xe00d, true);
    expectEncapsulationError(() => DicomMessage.readFile(buf), "ITEM_TAG_MISSING");
  });
});

describe("Encapsulated Pixel Data writer checks the Basic Offset Table against the fragments it emits", () => {
  const name = "SC_rgb_rle_2frame.dcm";

  it("keeps a valid table for two frames across three fragments: lengths [4,6,8], table [0,26]", () => {
    const input = withEncapsulated(name, { fragments: [4, 6, 8], table: [0, 26] });
    expectFramesIdenticalIn(input);
    const outRaw = rawPixelData(roundTripBuffer(input).output);
    expect(outRaw.offsets).toEqual([0, 26]);
    expect(outRaw.fragments.map((f) => f.length)).toEqual([4, 6, 8]);
  });

  it("keeps a valid table for 2 frames of 2 fragments each: table [0,316]", () => {
    const input = withEncapsulated(name, { fragments: [100, 200, 300, 400], table: [0, 316] });
    expectFramesIdenticalIn(input);
    const outRaw = rawPixelData(roundTripBuffer(input).output);
    expect(outRaw.offsets).toEqual([0, 316]);
    expect(outRaw.fragments.map((f) => f.length)).toEqual([100, 200, 300, 400]);
  });

  it("rebuilds a table whose entry is not a fragment boundary when there is one fragment per frame: [0,5] -> [0,108]", () => {
    const input = withEncapsulated(name, { fragments: [100, 100], table: [0, 5] });
    const outRaw = rawPixelData(roundTripBuffer(input).output);
    expect(outRaw.offsets).toEqual([0, 108]);
    expect(outRaw.fragments.map((f) => f.length)).toEqual([100, 100]);
  });

  it("rebuilds a table that is not strictly increasing: [0,0] -> [0,108]", () => {
    const input = withEncapsulated(name, { fragments: [100, 100], table: [0, 0] });
    expect(rawPixelData(roundTripBuffer(input).output).offsets).toEqual([0, 108]);
  });

  it("rebuilds a table whose entry points at the delimiter, past the last fragment: [0,216] -> [0,108]", () => {
    const input = withEncapsulated(name, { fragments: [100, 100], table: [0, 216] });
    expect(rawPixelData(roundTripBuffer(input).output).offsets).toEqual([0, 108]);
  });

  it("refuses a table whose first entry is not 0 when it cannot be rebuilt: [108] over 2 fragments", () => {
    const input = withEncapsulated(name, { fragments: [100, 100], table: [108] });
    const { dcm } = { dcm: DicomMessage.readFile(input) };
    const anon = anonymize(dcm.dict);
    expectEncapsulationError(() => dcm.write(anon), "OFFSET_TABLE_MISMATCH");
  });

  it("a table that does not match the fragments is rebuilt or refused: 9 entries of non-offset bytes over 2 fragments is refused", () => {
    const text = Array.from(Buffer.from("JOHN DOE 1970-01-01 MRN 1234567\0"));
    const input = withEncapsulated(name, { fragments: [100, 100], tableBytes: [0, 0, 0, 0, ...text] });
    const dcm = DicomMessage.readFile(input);
    const anon = anonymize(dcm.dict);
    expectEncapsulationError(() => dcm.write(anon), "OFFSET_TABLE_MISMATCH");
  });

  it("reports counts only when it refuses a table, never the table entries", () => {
    const text = Array.from(Buffer.from("JOHN DOE 1970-01-01 MRN 1234567\0"));
    const input = withEncapsulated(name, { fragments: [100, 100], tableBytes: [0, 0, 0, 0, ...text] });
    const dcm = DicomMessage.readFile(input);
    const entries = dcm.dict["7FE00010"].basicOffsetTable!;
    expect(entries.length).toBe(9);
    let message = "";
    try {
      dcm.write(anonymize(dcm.dict));
    } catch (e) {
      message = (e as Error).message;
    }
    expect(message).toMatch(/\b9\b/);
    expect(message).toMatch(/\b2\b/);
    for (const entry of entries.slice(1)) expect(message).not.toContain(String(entry));
  });

  describe("refuses a table entry that does not fit in 32 bits (fragment lengths [FFFFFFFE, 2])", () => {
    const fake = (n: number) => ({ byteLength: n } as unknown as ArrayBuffer);
    const write = (table: number[]) => {
      const vr = ValueRepresentation.createByTypeString("OB");
      const stream = new WriteBufferStream(256, true);
      return () => vr.writeBytes(stream, [fake(0xfffffffe), fake(2)], "1.2.840.10008.1.2.1", true, table);
    };
    it("when the table is rebuilt: [0,0] would become [0,100000006]", () => {
      expectEncapsulationError(write([0, 0]), "OFFSET_TOO_LARGE");
    });
    it("when the table is supplied: [0,100000006]", () => {
      expectEncapsulationError(write([0, 0x100000006]), "OFFSET_TOO_LARGE");
    });
  });

  it("refuses to write an odd-length fragment instead of padding it (padding would shift later offsets)", () => {
    const dcm = DicomMessage.readFile(withEncapsulated(name, { fragments: [100, 100], table: [0, 108] }));
    const anon = anonymize(dcm.dict);
    anon["7FE00010"] = { vr: "OB", Value: [new ArrayBuffer(101), new ArrayBuffer(100)], basicOffsetTable: [0, 109] };
    expectEncapsulationError(() => dcm.write(anon), "FRAGMENT_LENGTH_ODD");
  });

  it("refuses to write a zero-length fragment (PS3.5 A.4: an even number of bytes greater or equal to two)", () => {
    const dcm = DicomMessage.readFile(withEncapsulated(name, { fragments: [100, 100], table: [0, 108] }));
    const anon = anonymize(dcm.dict);
    anon["7FE00010"] = { vr: "OB", Value: [new ArrayBuffer(100), new ArrayBuffer(0)], basicOffsetTable: [0, 108] };
    expectEncapsulationError(() => dcm.write(anon), "FRAGMENT_LENGTH_ZERO");
  });

  it("refuses a fragment longer than FFFFFFFE bytes rather than wrapping its 32-bit length", () => {
    const vr = ValueRepresentation.createByTypeString("OB");
    const huge = { byteLength: 0x100000000 } as unknown as ArrayBuffer;
    const stream = new WriteBufferStream(256, true);
    expectEncapsulationError(
      () => vr.writeBytes(stream, [huge], "1.2.840.10008.1.2.1", true, []),
      "FRAGMENT_TOO_LONG"
    );
  });

  it("writes an empty table when the entry has none (caller-built Value)", () => {
    const dcm = DicomMessage.readFile(readFixture("US1_J2KR.dcm"));
    const anon = anonymize(dcm.dict);
    anon["7FE00010"] = { vr: "OB", Value: [new ArrayBuffer(10), new ArrayBuffer(20)] };
    const outRaw = rawPixelData(dcm.write(anon));
    expect(outRaw.offsets).toEqual([]);
    expect(outRaw.fragments.map((f) => f.length)).toEqual([10, 20]);
  });
});

describe("DicomDict.upsertTag does not keep a stale Basic Offset Table", () => {
  it("drops the table read from the file when the Pixel Data value is replaced", () => {
    const dcm = DicomMessage.readFile(readFixture("SC_rgb_rle_2frame.dcm"));
    expect(dcm.dict["7FE00010"].basicOffsetTable!.length).toBe(2);
    dcm.upsertTag("7FE00010", "OB", [new ArrayBuffer(10), new ArrayBuffer(20)]);
    expect(dcm.dict["7FE00010"].basicOffsetTable).toBeUndefined();
    const outRaw = rawPixelData(dcm.write());
    expect(outRaw.offsets).toEqual([]);
    expect(outRaw.fragments.map((f) => f.length)).toEqual([10, 20]);
  });
});

describe("API shape of encapsulated Pixel Data", () => {
  it("Value is the fragment list in file order and basicOffsetTable sits on the dictionary entry", () => {
    const buf = readFixture("examples_ybr_color.dcm");
    const raw = rawPixelData(buf);
    const entry = DicomMessage.readFile(buf).dict["7FE00010"];
    const values = entry.Value as Array<ArrayBuffer>;
    expect(values.length).toBe(raw.fragments.length);
    values.forEach((v, i) => expect(Buffer.compare(Buffer.from(v), raw.fragments[i])).toBe(0));
    expect(entry.basicOffsetTable).toEqual(raw.offsets);
  });

  it("native Pixel Data has no basicOffsetTable", () => {
    const entry = DicomMessage.readFile(readFixture("eCT_Supplemental.dcm")).dict["7FE00010"];
    expect("basicOffsetTable" in entry).toBe(false);
    expect(entry.Value.length).toBe(1);
  });

  it("exports the typed error", () => {
    expect(typeof (Index as any).EncapsulationError).toBe("function");
  });
});

describe("Only Pixel Data is encapsulated under a compressed transfer syntax", () => {
  it("writes a Red Palette LUT (0028,1201) OW in a JPEG file with its defined length", () => {
    const lut = longElement(0x0028, 0x1201, "OW", [1, 2, 3, 4, 5, 6]);
    const input = withEncapsulated("examples_ybr_color.dcm", {
      fragments: [100, 100],
      table: [0, 108],
      before: [],
    });
    // Insert the LUT just before Pixel Data (it sorts before (7FE0,0010)).
    const u8 = new Uint8Array(input);
    const at = pixelDataHeaderAt(u8);
    const withLut = new Uint8Array(u8.length + lut.length);
    withLut.set(u8.subarray(0, at), 0);
    withLut.set(lut, at);
    withLut.set(u8.subarray(at), at + lut.length);
    const dcm = DicomMessage.readFile(withLut.buffer);
    const anon = anonymize(dcm.dict);
    expect(anon["00281201"]).toBeDefined();
    const out = new Uint8Array(dcm.write(anon));
    let i = -1;
    for (let k = 132; k < out.length - 12; k++) {
      if (out[k] == 0x28 && out[k + 1] == 0 && out[k + 2] == 0x01 && out[k + 3] == 0x12 && out[k + 4] == 0x4f && out[k + 5] == 0x57) { i = k; break; }
    }
    expect(i).toBeGreaterThan(0);
    expect(new DataView(out.buffer).getUint32(i + 8, true)).toBe(6);
    expect(Array.from(out.subarray(i + 12, i + 18))).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("writes native Pixel Data nested in a sequence item (Icon Image Sequence) with its defined length; only top-level Pixel Data is encapsulated", () => {
    const dcm = DicomMessage.readFile(withEncapsulated("examples_ybr_color.dcm", { fragments: [100, 100], table: [0, 108] }));
    const icon = new Uint8Array([9, 8, 7, 6]).buffer;
    dcm.dict["00880200"] = {
      vr: "SQ",
      Value: [{
        "00280010": { vr: "US", Value: [2] },
        "00280011": { vr: "US", Value: [2] },
        "7FE00010": { vr: "OB", Value: [icon] },
      }],
    };
    const output = dcm.write();
    // The nested element sorts first, so the first (7FE0,0010) header is the icon's.
    const nested = rawPixelData(output);
    expect(nested.undefinedLength).toBe(false);
    expect(Array.from(nested.value)).toEqual([9, 8, 7, 6]);
    const reread = DicomMessage.readFile(output);
    const item = reread.dict["00880200"].Value[0] as TagDict;
    expect(Array.from(new Uint8Array(item["7FE00010"].Value[0] as ArrayBuffer))).toEqual([9, 8, 7, 6]);
    expect("basicOffsetTable" in item["7FE00010"]).toBe(false);
    // Top-level Pixel Data stays encapsulated.
    const top = reread.dict["7FE00010"];
    expect(top.basicOffsetTable).toEqual([0, 108]);
    expect((top.Value as Array<ArrayBuffer>).map((f) => f.byteLength)).toEqual([100, 100]);
  });
});

describe("Extended Offset Table (7FE0,0001) and Lengths (7FE0,0002), VR OV", () => {
  const name = "emri_small_jpeg_2k_lossless.dcm";

  function withEot(): { buf: ArrayBuffer; eot: number[]; lens: number[] } {
    const raw = rawPixelData(readFixture(name));
    const offsets: number[] = [];
    let o = 0;
    for (const f of raw.fragments) { offsets.push(o); o += 8 + f.length; }
    const eot = u64le(offsets);
    const lens = u64le(raw.fragments.map((f) => f.length));
    const before = [...longElement(0x7fe0, 0x0001, "OV", eot), ...longElement(0x7fe0, 0x0002, "OV", lens)];
    const u8 = new Uint8Array(readFixture(name));
    const at = pixelDataHeaderAt(u8);
    const out = new Uint8Array(u8.length + before.length);
    out.set(u8.subarray(0, at), 0);
    out.set(before, at);
    out.set(u8.subarray(at), at + before.length);
    return { buf: out.buffer, eot, lens };
  }

  it("parses a file that carries an Extended Offset Table", () => {
    const { buf } = withEot();
    const dcm = DicomMessage.readFile(buf);
    expect(dcm.dict["7FE00001"].vr).toBe("OV");
    expect(dcm.dict["7FE00002"].vr).toBe("OV");
  });

  it("DicomDict.upsertTag drops both attributes when the Pixel Data value is replaced", () => {
    const dcm = DicomMessage.readFile(withEot().buf);
    dcm.upsertTag("7FE00010", "OB", [new ArrayBuffer(10), new ArrayBuffer(20)]);
    expect(dcm.dict["7FE00001"]).toBeUndefined();
    expect(dcm.dict["7FE00002"]).toBeUndefined();
    const reread = DicomMessage.readFile(dcm.write());
    expect(reread.dict["7FE00001"]).toBeUndefined();
    expect(reread.dict["7FE00002"]).toBeUndefined();
  });

  it("keeps both attributes byte-identical through anonymisation, with the frames unchanged", () => {
    const { buf, eot, lens } = withEot();
    expectFramesIdenticalIn(buf);
    const { reread } = roundTripBuffer(buf);
    expect(Array.from(new Uint8Array(reread.dict["7FE00001"].Value[0] as ArrayBuffer))).toEqual(eot);
    expect(Array.from(new Uint8Array(reread.dict["7FE00002"].Value[0] as ArrayBuffer))).toEqual(lens);
    expect(rawPixelData(roundTripBuffer(buf).output).offsets).toEqual([]);
  });
});

describe("Functional groups: nested whitelist (PS3.15 Annex E Table E.1-1, PS3.3 C.7.6.16)", () => {
  const name = "eCT_Supplemental.dcm";
  const ENHANCED_CT = "1.2.840.10008.5.1.4.1.1.2.1";
  const ENHANCED_MR = "1.2.840.10008.5.1.4.1.1.4.1";
  const ENHANCED_XA = "1.2.840.10008.5.1.4.1.1.12.1.1";
  const IRRADIATION_UID = "1.3.6.1.4.1.5962.1.10.10.3.1.1166562673.14401";

  const sq = (...items: TagDict[]) => ({ vr: "SQ", Value: items });

  /** eCT with identifying attributes planted inside the functional groups. */
  function plantedECT() {
    const dcm = DicomMessage.readFile(readFixture(name));
    const perFrame = dcm.dict["52009230"].Value as Array<TagDict>;
    const frame0 = perFrame[0];
    const content = frame0["00209111"].Value[0] as TagDict;
    content["00189074"] = { vr: "DT", Value: ["20240101123456.000000"] }; // Frame Acquisition DateTime (D)
    content["00189151"] = { vr: "DT", Value: ["20240101123000.000000"] }; // Frame Reference DateTime (D)
    content["00209453"] = { vr: "LO", Value: ["LEAKLABEL"] }; // Frame Label (free text)
    content["00189220"] = { vr: "FD", Value: [12.5] }; // Frame Acquisition Duration (kept)
    frame0["00209158"] = { vr: "LT", Value: ["LEAKCOMMENT"] }; // Frame Comments (X)
    frame0["00100010"] = { vr: "PN", Value: ["LEAKNAME^PATIENT"] }; // not a functional group at all
    frame0["00100020"] = { vr: "LO", Value: ["LEAKID12345"] };
    frame0["00080022"] = { vr: "DA", Value: ["20240101"] };
    const shared = (dcm.dict["52009229"].Value as Array<TagDict>)[0];
    const region = ((shared["00209071"].Value[0] as TagDict)["00082218"].Value[0]) as TagDict;
    region["00080105"] = { vr: "CS", Value: ["LEAKMAPPING"] }; // not a code attribute we keep
    frame0["00089124"] = sq({ // Derivation Image Sequence (Source Image Sequence is X/Z/U*)
      "00082112": sq({
        "00081150": { vr: "UI", Value: ["1.2.840.10008.5.1.4.1.1.2"] },
        "00081155": { vr: "UI", Value: ["1.2.3.4.5.6789.LEAKUID"] },
      }),
      "00082111": { vr: "ST", Value: ["LEAKDERIVATION"] }, // Derivation Description (X)
    });
    return dcm;
  }

  function anonymisedPlanted() {
    const dcm = plantedECT();
    const anon = anonymize(dcm.dict);
    const output = dcm.write(anon);
    const reread = DicomMessage.readFile(output);
    return { anon, output, reread };
  }

  it("keeps per-frame geometry and frame content needed to display the frames", () => {
    const { reread } = anonymisedPlanted();
    const perFrame = reread.dict["52009230"].Value as Array<TagDict>;
    expect(perFrame.length).toBe(2);
    const pos = (i: number) => (perFrame[i]["00209113"].Value[0] as TagDict)["00200032"].Value;
    expect(pos(0)).toEqual(["99.5000", "-301.500", "-159.000"]);
    expect(pos(1)).toEqual(["99.5000", "-301.500", "-149.000"]);
    const content = perFrame[1]["00209111"].Value[0] as TagDict;
    expect(content["00209056"].Value).toEqual(["1"]); // Stack ID
    expect(content["00209057"].Value).toEqual([1]); // In-Stack Position Number
    expect(content["00209157"].Value).toEqual([1, 1]); // Dimension Index Values
    expect((perFrame[0]["00209111"].Value[0] as TagDict)["00189220"].Value).toEqual([12.5]);
  });

  it("keeps shared geometry, pixel measures, VOI and rescale, and the CT frame type", () => {
    const { reread } = anonymisedPlanted();
    const shared = (reread.dict["52009229"].Value as Array<TagDict>)[0];
    const item = (tag: string) => shared[tag].Value[0] as TagDict;
    expect(item("00209116")["00200037"].Value.length).toBe(6);
    expect(item("00289110")["00280030"].Value).toEqual(["0.388672", "0.388672"]);
    expect(item("00289110")["00180050"].Value).toEqual(["10.0000"]);
    expect(item("00289132")["00281050"].Value).toEqual(["49.0000"]);
    expect(item("00289132")["00281051"].Value).toEqual(["102.000"]);
    expect(item("00289145")["00281052"].Value).toEqual(["-1024.00"]);
    expect(item("00289145")["00281053"].Value).toEqual(["1.00000"]);
    expect(item("00189329")["00089007"].Value).toEqual(["DERIVED", "PRIMARY", "PERFUSION", "RCBF"]);
  });

  it("hashes the Irradiation Event UID (Table E.1-1: U) consistently", () => {
    const { reread, output } = anonymisedPlanted();
    const shared = (reread.dict["52009229"].Value as Array<TagDict>)[0];
    const uid = (shared["00189477"].Value[0] as TagDict)["00083010"].Value[0] as string;
    expect(uid.startsWith("1.2.826.0.1.3680043.10.341.")).toBe(true);
    expect(uid).not.toBe(IRRADIATION_UID);
    expect(Buffer.from(output).indexOf(IRRADIATION_UID)).toBe(-1);
    const again = anonymize(DicomMessage.readFile(readFixture(name)).dict);
    const shared2 = (again["52009229"].Value as Array<TagDict>)[0];
    expect((shared2["00189477"].Value[0] as TagDict)["00083010"].Value[0]).toBe(uid);
  });

  it("replaces per-frame acquisition and reference date-times with a dummy (Table E.1-1: D)", () => {
    const { reread, output } = anonymisedPlanted();
    const content = ((reread.dict["52009230"].Value as Array<TagDict>)[0]["00209111"].Value[0]) as TagDict;
    // DT is written padded to even length; compare the value, not the pad.
    const trimmed = (tag: string) => content[tag].Value.map((v) => String(v).trim());
    expect(trimmed("00189074")).toEqual(["19700101000000.000000"]);
    expect(trimmed("00189151")).toEqual(["19700101000000.000000"]);
    expect(Buffer.from(output).indexOf("20240101")).toBe(-1);
  });

  it("leaves no planted name, ID, comment, label, derivation or referenced UID inside the items", () => {
    const { output } = anonymisedPlanted();
    const bytes = Buffer.from(output);
    for (const marker of ["LEAKNAME", "LEAKID12345", "LEAKCOMMENT", "LEAKLABEL", "LEAKDERIVATION", "LEAKUID", "LEAKMAPPING"]) {
      expect(bytes.indexOf(marker)).toBe(-1);
    }
  });

  it("drops functional-group macros that are not whitelisted (Contrast/Bolus Usage)", () => {
    const { reread } = anonymisedPlanted();
    const shared = (reread.dict["52009229"].Value as Array<TagDict>)[0];
    expect(shared["00189341"]).toBeUndefined();
  });

  it("keeps the Real World Value Mapping numbers and units and replaces its LUT Label and LUT Explanation (Type 1, PS3.3 C.7.6.16.2.11) with fixed values", () => {
    const dcm = DicomMessage.readFile(readFixture(name));
    const shared = (dcm.dict["52009229"].Value as Array<TagDict>)[0];
    const mappingIn = shared["00409096"].Value[0] as TagDict;
    mappingIn["00409212"] = { vr: "FD", Value: [0.5, 1.5, 2.5] }; // Real World Value LUT Data
    const labelIn = "LEAKLUTLABEL";
    const explanationIn = "LEAKLUTEXPLANATION";
    mappingIn["00409210"] = { vr: "SH", Value: [labelIn] }; // LUT Label (Type 1, free text)
    mappingIn["00283003"] = { vr: "LO", Value: [explanationIn] }; // LUT Explanation (Type 1, free text)
    const output = dcm.write(anonymize(dcm.dict));
    const reread = DicomMessage.readFile(output);
    const out = (reread.dict["52009229"].Value as Array<TagDict>)[0];
    const mapping = out["00409096"].Value[0] as TagDict;
    expect(mapping["00409216"].Value).toEqual([0]); // Real World Value First Value Mapped
    expect(mapping["00409211"].Value).toEqual([4095]); // Real World Value Last Value Mapped
    expect(mapping["00409224"].Value).toEqual([-1024]); // Real World Value Intercept
    expect(mapping["00409225"].Value).toEqual([1]); // Real World Value Slope
    expect(mapping["00409212"].Value).toEqual([0.5, 1.5, 2.5]);
    const units = mapping["004008EA"].Value[0] as TagDict;
    expect(units["00080100"].Value).toEqual(["ml/100ml/s"]);
    expect(units["00080102"].Value).toEqual(["UCUM"]);
    // LUT Label and LUT Explanation are Type 1 in the item: present, non-empty, and fixed.
    const label = String(mapping["00409210"].Value[0]).trim();
    const explanation = String(mapping["00283003"].Value[0]).trim();
    expect(label).toBe("RWVM");
    expect(explanation).toBe("Real world value mapping");
    for (const input of [labelIn, explanationIn]) {
      expect(label).not.toContain(input);
      expect(explanation).not.toContain(input);
      expect(Buffer.from(output).indexOf(input)).toBe(-1);
    }
    expect(Buffer.from(output).indexOf("Regional Cerebral Blood Flow")).toBe(-1);
  });

  it("keeps the Double Float Real World Value First/Last Value Mapped (0040,9214)/(0040,9213), the floating-point alternatives to (0040,9216)/(0040,9211)", () => {
    const dcm = DicomMessage.readFile(readFixture(name));
    const shared = (dcm.dict["52009229"].Value as Array<TagDict>)[0];
    const mappingIn = shared["00409096"].Value[0] as TagDict;
    delete mappingIn["00409216"];
    delete mappingIn["00409211"];
    mappingIn["00409214"] = { vr: "FD", Value: [-0.25] }; // Double Float Real World Value First Value Mapped
    mappingIn["00409213"] = { vr: "FD", Value: [1.75] }; // Double Float Real World Value Last Value Mapped
    const reread = DicomMessage.readFile(dcm.write(anonymize(dcm.dict)));
    const out = (reread.dict["52009229"].Value as Array<TagDict>)[0];
    const mapping = out["00409096"].Value[0] as TagDict;
    expect(mapping["00409214"].Value).toEqual([-0.25]);
    expect(mapping["00409213"].Value).toEqual([1.75]);
    expect(mapping["00409224"].Value).toEqual([-1024]); // Intercept and Slope still apply over that range
    expect(mapping["00409225"].Value).toEqual([1]);
  });

  it("keeps Long Code Value (0008,0119) and URN Code Value (0008,0120), the Type 1C alternatives to Code Value (PS3.3 8.8)", () => {
    const dcm = DicomMessage.readFile(readFixture(name));
    const shared = (dcm.dict["52009229"].Value as Array<TagDict>)[0];
    const anatomy = shared["00209071"].Value[0] as TagDict;
    anatomy["00082218"] = sq(
      { "00080120": { vr: "UR", Value: ["http://snomed.info/id/12738006"] }, "00080104": { vr: "LO", Value: ["Brain"] } },
      { "00080119": { vr: "UC", Value: ["LONGCODEVALUE-0123456789"] }, "00080102": { vr: "SH", Value: ["99TEST"] }, "00080104": { vr: "LO", Value: ["Brain"] } }
    );
    const reread = DicomMessage.readFile(dcm.write(anonymize(dcm.dict)));
    const out = (reread.dict["52009229"].Value as Array<TagDict>)[0];
    const regions = (out["00209071"].Value[0] as TagDict)["00082218"].Value as Array<TagDict>;
    expect(regions[0]["00080120"].Value.map((v) => String(v).trim())).toEqual(["http://snomed.info/id/12738006"]);
    expect(regions[1]["00080119"].Value.map((v) => String(v).trim())).toEqual(["LONGCODEVALUE-0123456789"]);
  });

  it("keeps Derivation Image Sequence as an empty sequence (Type 2, PS3.3 C.7.6.16.2.6), without its contents", () => {
    const { reread } = anonymisedPlanted();
    const frame0 = (reread.dict["52009230"].Value as Array<TagDict>)[0];
    expect(frame0["00089124"]).toBeDefined();
    expect(frame0["00089124"].vr).toBe("SQ");
    expect(frame0["00089124"].Value).toEqual([]);
    const frame1 = (reread.dict["52009230"].Value as Array<TagDict>)[1];
    expect(frame1["00089124"]).toBeUndefined();
  });

  it("keeps the Mandatory Frame Anatomy macro as coded anatomy only", () => {
    const { reread } = anonymisedPlanted();
    const shared = (reread.dict["52009229"].Value as Array<TagDict>)[0];
    const anatomy = shared["00209071"].Value[0] as TagDict;
    expect(anatomy["00209072"].Value).toEqual(["U"]);
    const region = anatomy["00082218"].Value[0] as TagDict;
    expect(Object.keys(region).sort()).toEqual(["00080100", "00080102", "00080104"]);
    expect(region["00080100"].Value).toEqual(["T-A0100"]);
  });

  it("drops a functional-group attribute that is not encoded as a sequence", () => {
    const dict: TagDict = {
      "00080016": { vr: "UI", Value: [ENHANCED_CT] },
      "52009230": { vr: "UN", Value: ["LEAKRAW"] },
    };
    expect(anonymize(dict)["52009230"]).toBeUndefined();
  });

  it("Enhanced CT: replaces Acquisition DateTime (0008,002A) with a dummy (Table E.1-1 X/Z/D; Type 1C in C.8.15.2) and keeps Acquisition Duration (0018,9073)", () => {
    const dcm = plantedECT();
    dcm.dict["0008002A"] = { vr: "DT", Value: ["20240101123456.000000"] };
    dcm.dict["00189073"] = { vr: "FD", Value: [3.5] };
    const anon = anonymize(dcm.dict);
    expect(anon["0008002A"]).toEqual({ vr: "DT", Value: ["19700101000000.000000"] });
    expect(anon["00189073"]).toEqual({ vr: "FD", Value: [3.5] });
    const output = dcm.write(anon);
    const reread = DicomMessage.readFile(output);
    // DT is written padded to even length; compare the value, not the pad.
    expect(reread.dict["0008002A"].Value.map((v) => String(v).trim())).toEqual(["19700101000000.000000"]);
    expect(Buffer.from(output).indexOf("20240101123456")).toBe(-1);
    expect(reread.dict["00189073"].Value).toEqual([3.5]);
  });

  it("does not list Enhanced CT, MR and XA as supported (acquisition macros not yet reviewed), yet gives each a class policy that keeps the functional groups", () => {
    const supported = supportedSOPClasses();
    for (const uid of [ENHANCED_CT, ENHANCED_MR, ENHANCED_XA]) {
      expect(supported).not.toContain(uid);
      const policy = policyFor(uid);
      expect(policy["00080016"]).toMatchObject({ action: "replace", value: [uid] });
      expect(policy["52009229"].action).toBe("keep");
      expect((policy["52009229"] as any).items).toBeDefined();
      expect((policy["52009230"] as any).items).toBeDefined();
    }
  });
});
