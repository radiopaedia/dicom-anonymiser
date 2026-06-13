import Validator from "./Validator";

// Policy blanks the Patient's Age tag, so anonymised data should carry no age
// value at all. Any retained age - well-formed or not - is a fatal (level-1)
// violation; a blanked tag is fine.
describe("validateAgeStringVR", () => {
  it("flags any age value, even a well-formed one, as fatal", () => {
    const warnings = Validator({ "00101010": { vr: "AS", Value: ["044Y"] } });
    expect(warnings["00101010"].some((w) => w.level <= 1)).toBe(true);
  });

  it("flags a malformed age value as fatal", () => {
    const warnings = Validator({
      "00101010": { vr: "AS", Value: ["20010101"] },
    });
    expect(warnings["00101010"].some((w) => w.level <= 1)).toBe(true);
  });

  it("does not flag a blanked age", () => {
    const warnings = Validator({ "00101010": { vr: "AS", Value: [] } });
    expect(warnings["00101010"]).toEqual([]);
  });
});

// Burnt-in annotation (0028,0301) is a possible-leak (level 2) warning, not a
// fatal (level 1) one: we only de-identify metadata, so refusing the file does
// not help, and on plain films YES usually means a laterality/technique marker.
describe("validate BurnedInAnnotation", () => {
  it("warns about burnt-in annotations but not fatally", () => {
    const warnings = Validator({ "00280301": { vr: "CS", Value: ["YES"] } });
    expect(warnings["00280301"]).toHaveLength(1);
    expect(warnings["00280301"][0].level).toBe(2);
    expect(warnings["00280301"].some((w) => w.level <= 1)).toBe(false);
  });

  it("does not warn when there are no burnt-in annotations", () => {
    const warnings = Validator({ "00280301": { vr: "CS", Value: ["NO"] } });
    expect(warnings["00280301"]).toEqual([]);
  });
});

// Recognizable visual features (0028,0302) stays fatal: unlike a laterality
// marker, it means the patient is identifiable from the image itself.
describe("validate RecognizableVisualFeatures", () => {
  it("flags recognizable visual features as fatal", () => {
    const warnings = Validator({ "00280302": { vr: "CS", Value: ["YES"] } });
    expect(warnings["00280302"].some((w) => w.level <= 1)).toBe(true);
  });

  it("does not flag when there are no recognizable visual features", () => {
    const warnings = Validator({ "00280302": { vr: "CS", Value: ["NO"] } });
    expect(warnings["00280302"]).toEqual([]);
  });
});
