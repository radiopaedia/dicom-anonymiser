import Anonymize, { AnonymizationError } from "./Anon";
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

describe("Anonymize refuses rather than emitting PatientIdentityRemoved=NO", () => {
  // Recognizable visual features means the patient is identifiable from the
  // image itself (e.g. a face render), so it stays fatal. MR's policy keeps
  // this tag, so the warning survives into validation.
  const MR_SOP = "1.2.840.10008.5.1.4.1.1.4";
  function mrDict(extra: TagDict = {}): TagDict {
    return { "00080016": { vr: "UI", Value: [MR_SOP] }, ...extra };
  }

  it("throws AnonymizationError when a file cannot be fully de-identified", () => {
    // Recognizable visual features set to YES is a fatal (level-1) warning.
    const dcm = mrDict({ "00280302": { vr: "CS", Value: ["YES"] } });
    expect(() => Anonymize(dcm)).toThrow(AnonymizationError);
  });

  it("does not return a NO-stamped dataset for an un-removable file", () => {
    const dcm = mrDict({ "00280302": { vr: "CS", Value: ["YES"] } });
    let result: TagDict | undefined;
    try {
      result = Anonymize(dcm);
    } catch {
      result = undefined;
    }
    expect(result?.["00120062"]?.Value).not.toEqual(["NO"]);
  });
});

describe("Anonymize tolerates burnt-in annotations", () => {
  // Burnt-in annotation is non-fatal: we only de-identify metadata (never pixel
  // data), so refusing the file does not help, and on plain films YES usually
  // means a benign laterality/technique marker. The file is still emitted and
  // stamped PatientIdentityRemoved=YES. CT's policy keeps this tag.
  it("anonymises the file and stamps PatientIdentityRemoved=YES", () => {
    const anon = Anonymize(ctDict({ "00280301": { vr: "CS", Value: ["YES"] } }));
    expect(anon["00120062"].Value).toEqual(["YES"]);
  });
});

describe("SOP Instance UID is regenerated, not retained or dropped", () => {
  // The SOP Common module's instance UID is (0008,0018), not (0020,000D).
  // It must be rewritten to a hashed value so the original cannot be used to
  // re-identify the source instance, while staying present (it is Type 1).
  const HASH_PREFIX = "1.2.826.0.1.3680043.10.341.512.";
  const ORIGINAL_SOP_INSTANCE_UID = "1.2.840.113619.2.55.3.123456789.1.1";

  it("replaces the original SOP Instance UID with a hashed value", () => {
    const anon = Anonymize(
      ctDict({ "00080018": { vr: "UI", Value: [ORIGINAL_SOP_INSTANCE_UID] } })
    );
    expect(anon["00080018"].Value[0]).not.toEqual(ORIGINAL_SOP_INSTANCE_UID);
    expect(anon["00080018"].Value[0]).toMatch(
      new RegExp("^" + HASH_PREFIX.replace(/\./g, "\\."))
    );
  });

  it("does not strip the mandatory SOP Instance UID", () => {
    const anon = Anonymize(
      ctDict({ "00080018": { vr: "UI", Value: [ORIGINAL_SOP_INSTANCE_UID] } })
    );
    expect(anon["00080018"]).toBeDefined();
    expect(anon["00080018"].Value).toHaveLength(1);
  });

  it("is deterministic so cross-file instance references stay consistent", () => {
    const a = Anonymize(
      ctDict({ "00080018": { vr: "UI", Value: [ORIGINAL_SOP_INSTANCE_UID] } })
    );
    const b = Anonymize(
      ctDict({ "00080018": { vr: "UI", Value: [ORIGINAL_SOP_INSTANCE_UID] } })
    );
    expect(a["00080018"].Value[0]).toEqual(b["00080018"].Value[0]);
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

describe("Re-anonymising an already-anonymised file strips leftover SQ tags", () => {
  // Fixture is a previously-anonymised file that still carries SQ tags
  // (from an older anonymiser that kept them). Re-running anonymise must
  // strip those SQ tags and leave every other tag byte-identical through
  // a write/reparse roundtrip.
  const FIXTURE = "fixtures/03_anonymised_with_leftover_sq.dcm";
  // Leftover SQ tags an older anonymiser kept; re-anonymising must remove these.
  const SQ_TAGS_REMOVED = ["00189346", "00400275"];
  // Tags the policy rewrites rather than removes, so they are present in the
  // output but legitimately changed: age is blanked and PatientIdentityRemoved
  // is recomputed. Neither survives a roundtrip unchanged.
  const POLICY_REWRITES = ["00101010", "00120062"];
  const ROUNDTRIP_SKIP = [...SQ_TAGS_REMOVED, ...POLICY_REWRITES];

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

    const skip = new Set(ROUNDTRIP_SKIP);
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
