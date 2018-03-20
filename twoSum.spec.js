const { expect } = require("chai");
const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("should be a function", () => {
    expect(typeof twoSum).to.equal("function");
  });
  it("should return the indices of two items in an array that add up to a target", () => {
    expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
  });
  it("should return the indices of two items at the edges of an array that add up to a target", () => {
    expect(twoSum([1, 2, 3], 4)).to.deep.equal([0, 2]);
  });
  it("should return an empty array when no numbers add up", () => {
    expect(twoSum([1, 2, 3], 6)).to.deep.equal([]);
  });
});
