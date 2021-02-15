import { expect } from "chai";
import starwars from "./index";

// random comment test
describe("starwars-names", () => {
  describe("all", () => {
    it("should be an array of strings", () => {
      const isArrayOfStrings = (array) => {
        return array.every((item) => typeof item === "string");
      };
      expect(starwars.all).to.satisfy(isArrayOfStrings);
      // console.log
    });

    it("should contain Luke Skywalker", () => {
      expect(starwars.all).to.include("Luke Skywalker");
    });
  });

  describe("random", () => {
    it("should return a random item from starwars.all", () => {
      const randomItem = starwars.random();
      expect(starwars.all).to.include(randomItem);
    });
  });
});
