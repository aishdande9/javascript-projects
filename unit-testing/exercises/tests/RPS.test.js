const whoWon = require("../RPS.js");

describe("whoWon", function () {
  test("returns invalid inputs when player 1 and player 2 is not equal to rock, paper, scissors", function () {
    let output = whoWon("kite", "pig");
    expect(output).toEqual("Invalid inputs!!!");
  });

  test("returns tie when player 1 = player 2", function () {
    let output = whoWon("rock", "rock");
    expect(output).toEqual("TIE!");
  });

  test("returns players 2 wins when player 1 = rock and player 2 = paper", function () {
    let output = whoWon("rock", "paper");
    expect(output).toEqual("Player 2 wins!");
  });

  test("returns Players 2 wins when player 1 = paper and player 2 = scissors", function () {
    let output = whoWon("paper", "scissors");
    expect(output).toEqual("Player 2 wins!");
  });

  test("returns Players 2 wins when player 1 = scissors and player 2 = rock", function () {
    let output = whoWon("scissors", "rock");
    expect(output).toEqual("Player 2 wins!");
  });

  test("returns player 1 wins when player 1 = rock and player 2 = scissors", function () {
    let output = whoWon("rock", "scissors");
    expect(output).toEqual("Player 1 wins!");
  });

  test("returns player 1 wins when player 1 = scissors and player 2 = paper", function () {
    let output = whoWon("scissors", "paper");
    expect(output).toEqual("Player 1 wins!");
  });

  test("returns player 1 wins when player 1 = paper and player 2 = rock", function () {
    let output = whoWon("paper", "rock");
    expect(output).toEqual("Player 1 wins!");
  });
});
