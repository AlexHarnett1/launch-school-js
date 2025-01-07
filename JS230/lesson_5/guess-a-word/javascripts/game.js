class Game {
  constructor() {
    this.generateRandomWord = RandomWordGenerator();
    this.spacesNode = getElement('spaces');
    this.treeNode = getElement('tree');
    this.applesNode = getElement('apples');
    this.guessesNode = getElement('guesses');
    this.init();
    this.addEventListeners();
  }

  init() {
    //generate the word and initialize guess count.
    this.word = this.generateRandomWord();
    this.guesses = [];
    this.incorrectGuessCount = 0;
    this.gameOver = false;
    document.getElementById('message').textContent = '';

    // reset the tree
    this.applesNode.removeAttribute('class');
    document.querySelector('body').removeAttribute('class');

    // Initialize the word spaces
    this.spacesNode.querySelectorAll('span').forEach(span => span.remove());
    this.guessesNode.querySelectorAll('span').forEach(span => span.remove());

    for (let i = 0; i < this.word.length; i++) {
      this.spacesNode.appendChild(document.createElement('span'));
    }

    console.log(this.word);
  }

  addEventListeners() {

    document.querySelector('A').addEventListener('click', (e) => {
      e.preventDefault();
      this.init();
    });

    document.addEventListener('keydown', (event) => {
      this.userGuess(event.key);
    });
  }

  userGuess(letter) {
    if (letter.length !== 1 || letter.toUpperCase() < 'A' || letter.toUpperCase() > 'Z') return;
    if (this.guesses.includes(letter) || this.gameOver) return;

    this.#addNewGuess(letter);

    if (this.word.includes(letter)) {
      this.#inputLettersToBoard(letter);
    } else {
      this.incorrectGuessCount++;
      this.applesNode.setAttribute('class', `guess_${this.incorrectGuessCount}`);
    }

    if (this.incorrectGuessCount === 6 || this.#userWon()) this.#endGame();
  }

  #inputLettersToBoard(letter) {
    let spacesChildren = this.spacesNode.querySelectorAll('SPAN');
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        spacesChildren[i].textContent = letter;
      }
    }
  }

  #addNewGuess(letter) {
    let newGuess = document.createElement('span');
    this.guessesNode.appendChild(newGuess);
    newGuess.textContent = letter;
    this.guesses.push(letter);
  }

  #endGame() {
    let message = document.getElementById('message');
    let body = document.querySelector('body');
    if (this.incorrectGuessCount === 6) {
      body.setAttribute('class', 'lose');
      message.textContent = `Sorry, you lost. The word was ${this.word}.`;
    } else {
      body.setAttribute('class', 'win');
      message.textContent = "Congrats, you won!";
    }
    this.gameOver = true;
  }

  #userWon() {
    let spacesChildren = this.spacesNode.querySelectorAll('SPAN');
    for (let i = 0; i < spacesChildren.length; i++) {
      if (spacesChildren[i].textContent === '') return false;
    }
    return true;
  }

}

function RandomWordGenerator() {
  let words = ['banana', 'pear', 'apple', 'orange', 'strawberry'];
  return function() {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words.splice(randomIndex, 1)[0] || undefined;
  }
}

function getElement(selector) {
  return document.getElementById(selector);
}

document.addEventListener('DOMContentLoaded', () => {
  let game = new Game();
});
