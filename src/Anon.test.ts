import Anonymize from "./Anon";
import DicomMessage, { TagDict } from "./Message";
const fs = require("fs");

// Minimal CT dataset; CT's policy includes the patient module, so age/weight
// rules apply. SOP Class UID is required for anonymize to pick a policy.
const CT_SOP = "1.2.840.10008.5.1.4.1.1.2";
function ctDict(extra: TagDict = {}): TagDict {
  return { "00080016": { vr: "UI", Value: [CT_SOP] }, ...extra };
}

function readFileBuffer(path: string): ArrayBuffer {
  const b = fs.readFileSync(path);
  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
}

function anonymiseFixture(path: string) {
  const dcm = DicomMessage.readFile(readFileBuffer(path));
  const anon = Anonymize(dcm.dict);
  const writtenBytes = Buffer.from(dcm.write(anon));
  return { dcm, anon, writtenBytes };
}

describe("Patient age and weight are dropped, not retained", () => {
  it("blanks Patient's Age rather than keeping a rounded value", () => {
    const anon = Anonymize(
      ctDict({ "00101010": { vr: "AS", Value: ["044Y"] } })
    );
    expect(anon["00101010"].Value).toEqual([]);
  });

  it("blanks Patient Weight rather than bucketing it", () => {
    const anon = Anonymize(
      ctDict({ "00101030": { vr: "DS", Value: ["72"] } })
    );
    expect(anon["00101030"].Value).toEqual([]);
  });

  it("stamps PatientIdentityRemoved=YES for a file that carries only an age", () => {
    const anon = Anonymize(
      ctDict({ "00101010": { vr: "AS", Value: ["044Y"] } })
    );
    expect(anon["00120062"].Value).toEqual(["YES"]);
  });
});

describe("Anonymize strips previously-kept SQ-VR tags", () => {
  it("strips RequestAttributesSequence carrying nested physician PN", () => {
    const { anon, writtenBytes } = anonymiseFixture(
      "fixtures/01_ras_physician.dcm"
    );

    expect(anon["00400275"]).toBeUndefined();
    expect(writtenBytes.includes("TEST^")).toBe(false);
  });

  it("strips RequestAttributesSequence carrying nested source-institution UIDs", () => {
    const { anon, writtenBytes } = anonymiseFixture(
      "fixtures/02_ras_uids.dcm"
    );

    expect(anon["00400275"]).toBeUndefined();
    expect(writtenBytes.includes("1.3.12.2.1107.5.1.7.TEST")).toBe(false);
  });

  it("preserves safe top-level tags (sanity check on assertion pattern)", () => {
    const { anon } = anonymiseFixture("fixtures/01_ras_physician.dcm");

    expect(anon["00080060"]).toBeDefined();
  });
});

describe("Re-anonymising an already-anonymised file only strips SQ tags", () => {
  // Fixture is a previously-anonymised file that still carries SQ tags
  // (from an older anonymiser that kept them). Re-running anonymise must
  // strip those SQ tags and leave every other tag byte-identical through
  // a write/reparse roundtrip.
  const FIXTURE = "fixtures/03_reanon_preserves_non_sq.dcm";
  const SQ_TAGS_REMOVED = ["00189346", "00400275"];

  it("removes the leftover SQ tags", () => {
    const { anon } = anonymiseFixture(FIXTURE);
    for (const tag of SQ_TAGS_REMOVED) {
      expect(anon[tag]).toBeUndefined();
    }
  });

  it("does not leak SQ-internal markers into the output bytes", () => {
    const { writtenBytes } = anonymiseFixture(FIXTURE);
    expect(writtenBytes.includes("1.3.12.2.1107.5.1.7.TEST")).toBe(false);
    expect(writtenBytes.includes("TESTSCHED")).toBe(false);
    expect(writtenBytes.includes("TESTREQID")).toBe(false);
  });

  it("leaves every non-SQ tag JSON-identical through a write/reparse roundtrip", () => {
    const original = DicomMessage.readFile(readFileBuffer(FIXTURE));
    const { writtenBytes } = anonymiseFixture(FIXTURE);
    const reparsed = DicomMessage.readFile(
      writtenBytes.buffer.slice(
        writtenBytes.byteOffset,
        writtenBytes.byteOffset + writtenBytes.byteLength
      )
    );

    // Tags this policy intentionally rewrites on every run, so they are not
    // expected to survive a re-anonymise unchanged: age is now blanked, and
    // PatientIdentityRemoved is recomputed (this fixture was previously stamped
    // NO by the age-regex bug and now correctly resolves to YES).
    const skip = new Set([...SQ_TAGS_REMOVED, "00101010", "00120062"]);
    const keys = new Set([
      ...Object.keys(original.dict),
      ...Object.keys(reparsed.dict),
    ]);
    const diffs: string[] = [];
    for (const key of keys) {
      if (skip.has(key)) continue;
      const before = JSON.stringify(original.dict[key]);
      const after = JSON.stringify(reparsed.dict[key]);
      if (before !== after) diffs.push(`${key}: ${before} -> ${after}`);
    }
    expect(diffs).toEqual([]);
  });

  // JSON.stringify on an ArrayBuffer yields "{}", so the tag-level diff
  // above cannot detect pixel-data changes. Assert the bytes directly.
  it("preserves pixel data bytes exactly through a write/reparse roundtrip", () => {
    const original = DicomMessage.readFile(readFileBuffer(FIXTURE));
    const { writtenBytes } = anonymiseFixture(FIXTURE);
    const reparsed = DicomMessage.readFile(
      writtenBytes.buffer.slice(
        writtenBytes.byteOffset,
        writtenBytes.byteOffset + writtenBytes.byteLength
      )
    );

    const origPx = Buffer.from(
      original.dict["7FE00010"].Value[0] as ArrayBuffer
    );
    const newPx = Buffer.from(
      reparsed.dict["7FE00010"].Value[0] as ArrayBuffer
    );
    expect(newPx.equals(origPx)).toBe(true);
  });

  it("leaves the file meta header JSON-identical through a write/reparse roundtrip", () => {
    const original = DicomMessage.readFile(readFileBuffer(FIXTURE));
    const { writtenBytes } = anonymiseFixture(FIXTURE);
    const reparsed = DicomMessage.readFile(
      writtenBytes.buffer.slice(
        writtenBytes.byteOffset,
        writtenBytes.byteOffset + writtenBytes.byteLength
      )
    );

    expect(JSON.stringify(reparsed.meta)).toEqual(
      JSON.stringify(original.meta)
    );
  });
});
