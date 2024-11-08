/*
How the game works:
There is a 3x3 board of empty squares.
There are two players:
  - A computer(X)
  - A player(O)

We can let the player go first.

Game loop (UNTIL WINNING CONDITION MET)

The player picks a space on the board.
  - For this we can ask the player for a number between 1 and 9.
Then the computer picks a random space.

Winning Condition
 - 3 spaces are all X or all O horizontally.
   - (1, 2, 3), (4, 5, 6), (7, 8, 9)
 - 3 spaces are all X or all O vertically.
   - (1, 4, 7), (2, 5, 8), (3, 6, 9)
 - 3 spaces are all X or all O diagonally.
   - (1, 5, 9), (3, 5, 7)
*/
const rlSync = require('readline-sync');

class Board {
  VICTORYCONDITIONS = [
    [1, 2, 3], // top row
    [4, 5, 6], // middle row
    [7, 8, 9], // bottom row
    [1, 4, 7], // left column
    [2, 5, 8], // center column
    [3, 6, 9], // right column
    [1, 5, 9], // diagonal from top-left to bottom-right
    [3, 5, 7]  // diagonal from top-right to bottom-left
  ];

  TOPLINE = '   |   |   \n'
  BOTLINE = '___|___|___\n'
  constructor() {
    this.clear();
  }

  display() {
    console.log(
      this.TOPLINE + ` ${this.spaces[1]} | ${this.spaces[2]} | ${this.spaces[3]} \n` + this.BOTLINE +
      this.TOPLINE + ` ${this.spaces[4]} | ${this.spaces[5]} | ${this.spaces[6]} \n` + this.BOTLINE +
      this.TOPLINE + ` ${this.spaces[7]} | ${this.spaces[8]} | ${this.spaces[9]} \n` + this.TOPLINE);
  }

  clear() {
    this.spaces = { 1: ' ', 2: ' ', 3: ' ', 4: ' ', 5: ' ', 6: ' ', 7: ' ', 8: ' ', 9: ' ' };
  }

  getAvailableSpaces() {
    return Object.keys(this.spaces).filter(key => {
      return this.spaces[key] === ' ';
    });
  }

  isCatsGame() {
    return this.getAvailableSpaces().length === 0;
  }

  findWinningSpace(marker) {
    for (const condition of this.VICTORYCONDITIONS) {
      const [a, b, c] = condition;
      if (this.spaces[a] === marker && this.spaces[b] === marker && this.spaces[c] === ' '){
        return c;
      } else if (this.spaces[a] === marker && this.spaces[c] === marker && this.spaces[b] === ' ') {
        return b;
      } else if (this.spaces[b] === marker && this.spaces[c] === marker && this.spaces[a] === ' ') {
        return a;
      }
    }
    return null; // returns null if there's no winner
  }

  checkVictory() {
    for (const condition of this.VICTORYCONDITIONS) {
      const [a, b, c] = condition;
      if (this.spaces[a] === this.spaces[b] &&
        this.spaces[b] === this.spaces[c] &&
        this.spaces[a] !== ' ') {
        return this.spaces[a]; // returns 'X' or 'O' if there's a win
      }
    }
  }
}

class Player {
  static COMPUTER_MARKER = 'X';
  static HUMAN_MARKER = 'O';

  constructor(isComputer) {
    this.marker = isComputer ? Player.COMPUTER_MARKER : Player.HUMAN_MARKER;
    this.temp = false;
    this.wins = 0;
  }

  addWin() {
    this.wins += 1;
  }
  getWins() {
    return this.wins;
  }
}

class Human extends Player {
  makeMove(board) {
    let inputInvalid = true;
    while (inputInvalid) {
      let input = rlSync.question(`Pick a number from ${board.getAvailableSpaces()}\n`);
      if (!board.getAvailableSpaces().includes(input)) {
        console.log('Invalid input.');
      } else {
        board.spaces[parseInt(input, 10)] = this.marker;
        inputInvalid = false;
      }
    }
  }
}

class Computer extends Player {
  makeMove(board) {
    let availableSpaces = board.getAvailableSpaces();
    let selectedSpace;
    if (selectedSpace = board.findWinningSpace(Player.COMPUTER_MARKER)) {
    } else if (selectedSpace = board.findWinningSpace(Player.HUMAN_MARKER)) {
    } else if (availableSpaces.includes('5')) {
      selectedSpace = 5;
    } else {
      selectedSpace = availableSpaces[Math.floor(Math.random() * availableSpaces.length)];
    }
    board.spaces[selectedSpace] = this.marker;
  }
}

class Game {

  constructor() {
    this.human = new Human(false);
    this.computer = new Computer(true);
    this.gameBoard = new Board();
  }

  startGame() {
    console.log("Hello and welcome, let's play some Tic Tac Toe!");
    this.gameBoard.display();
    while (this.human.getWins() < 2 && this.computer.getWins() < 2) {
      this.#beginGameLoop();
      this.#logEndGame();
      console.log(`Computer has ${this.computer.getWins()} wins and you have ${this.human.getWins()}`);
      this.gameBoard.clear();
    }
    this.#logBestOfThree();
  }

  #beginGameLoop() {
    let humanTurn = true;
    while (!this.gameBoard.checkVictory() && !this.gameBoard.isCatsGame()) {
      if (humanTurn) {
        this.human.makeMove(this.gameBoard);
        this.gameBoard.display();
      } else {
        this.computer.makeMove(this.gameBoard);
        this.gameBoard.display();
      }
      humanTurn = !humanTurn;
    }
  }

  #logEndGame() {
    if (this.gameBoard.checkVictory() === this.human.marker) {
      this.human.addWin();
      console.log('You won! Congratulations my dude!');
    } else if (this.gameBoard.checkVictory() === this.computer.marker) {
      this.computer.addWin();
      console.log('Wow, you really just got beat by a computer.');
    } else {
      console.log("Meow, Cat's Game!");
    }
  }

  #logBestOfThree() {
    if (this.human.getWins() > this.computer.getWins()) {
      console.log('Congrats, you won the best two out of three!');
    } else {
      console.log('Sorry, the computer got the best of you!');
    }
  }

}



new Game().startGame();