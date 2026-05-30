import Validator from "./Validator";

// A rounded age of the form NNN Y is permitted in anonymised data. The
// validator previously used an invalid quantifier (/^\d{1-3}Y$/) that no real
// age could match, so every retained age raised a fatal (level-1) warning.
describe("validateAgeStringVR", () => {
  it("does not flag a well-formed age string", () => {
    const warnings = Validator({ "00101010": { vr: "AS", Value: ["044Y"] } });
    expect(warnings["00101010"]).toEqual([]);
  });

  it("flags a malformed age value as fatal", () => {
    const warnings = Validator({
      "00101010": { vr: "AS", Value: ["20010101"] },
    });
    expect(warnings["00101010"].some((w) => w.level <= 1)).toBe(true);
  });
});
