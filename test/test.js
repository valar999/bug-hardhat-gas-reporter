const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Test", function () {
  it("should exit with error", async function () {
    expect(1n).to.equal(2n);
  });
});
