const { expect } = require("chai");

describe("Game contract", function () {
  let Game;
  let play;

  beforeEach(async function () {
    Game = await ethers.getContractFactory("Game");
    play = await Game.deploy();
    await play.deployed();
  });

  it("return false if the user guess is wrong", async function () {

    let random_1 = 1;
    let random_2 = 2;
    let guess = 5;

    expect(await play.game(guess)).to.equal(false);
  });

});