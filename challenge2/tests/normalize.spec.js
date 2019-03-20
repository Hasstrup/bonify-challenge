import expect from "expect";
import { normalize, normalizeValuesFromInput } from "../src/normalize";
import data from "../src/data";

const INVALID_INPUT_LIST = [1, "  ", [1, 2, 3]];
describe("Normalize function", () => {
  it("normalizes the expected input correctly", () => {
    const NORMALIZING_KEY = "value";
    expect(normalize(data.source, NORMALIZING_KEY)).toEqual(data.target);
  });

  it("throws an an error with invalid input", () => {
    try {
      normalize(INVALID_INPUT_LIST[Math.floor(Math.random() * INVALID_INPUT_LIST.length)]);
    } catch (e) {
        expect(e.message).toEqual("Please provide a valid input, should be an object with some input")
    }
  });

  describe("normailizeValuesFromInput function", () => {
    it("returns null if the input is not an object", () => {
      expect(normalizeValuesFromInput(INVALID_INPUT_LIST)).toBeFalsy();
    });

    it("returns the correct value for a key", () => {
      const MOCK_INPUT = {
        name: "Hasstrup Ezekiel",
        company: "Bonify",
        country: "Germany",
        founder: "Gamal"
      };
      expect(normalizeValuesFromInput(MOCK_INPUT, "name")).toEqual(
        "Hasstrup Ezekiel"
      );
      expect(normalizeValuesFromInput(MOCK_INPUT, "company")).toEqual("Bonify");
      expect(normalizeValuesFromInput(MOCK_INPUT, "country")).toEqual(
        "Germany"
      );
      expect(normalizeValuesFromInput(MOCK_INPUT, "founder")).toEqual("Gamal");
    });

    it("normalizes a list of fields", () => {
      const input = {
        value: [{ registration: { value: true }, vlad: { value: "impaler" } }]
      };
      expect(normalizeValuesFromInput(input, "value")).toEqual([
        { registration: true, vlad: "impaler" }
      ]);
    });
  });
});
