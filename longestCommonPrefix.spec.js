const { expect } = require("chai");
const longestCommonPrefix = require("./longestCommonPrefix");

describe("longestCommonPrefix", () => {
  it("should return an empty string for an empty array", () => {
    expect(longestCommonPrefix([])).to.equal("");
  });
  it("should be a function", () => {
    expect(longestCommonPrefix).to.be.a("function");
  });
  it("should return an a three letter prefix for three words sharing it", () => {
    expect(longestCommonPrefix(["foobar", "foo", "foolish"])).to.equal("foo");
  });
  it("should return an empty string for an array with only some words sharing it", () => {
    expect(
      longestCommonPrefix(["alphabet", "peanuts", "alphanumeric"])
    ).to.equal("");
  });
});
