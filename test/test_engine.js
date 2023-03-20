const { expect } = require("chai");
const hre = require("hardhat");

describe("Engine", function () {
  it("Output the result of BitwiseOR operation on the inputs", async function () {

    const Engine = await hre.ethers.getContractFactory("Engine");
    const engine = await Engine.deploy();

    expect(await engine.bitwise_or(4, 1)).to.equal(5);
    expect(await engine.bitwise_or(0, 2)).to.equal(2);
  });
});