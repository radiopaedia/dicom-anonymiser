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
