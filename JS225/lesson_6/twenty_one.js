/*
There's a dealer with a deck of 52 cards.
 - The player gets two cards from the deck.
 - The dealer gets two cards from the deck.
  - Player can see one of the two cards of the dealer.

While (player's hand is less than 21 - player busted?) 
 - Prompt user to hit(h) or stand(s)
 - If they hit then give another card.

While (dealer's hand is less than 16 - dealer hit)

Check to see who won?


Verbs: hit, stand, deal, win
Nouns: Deck, card, hand, player, dealer
*/

class Card {
  static SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  static VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  constructor(suit, value) {
    this.suit = suit;
    this.value = value
  }

  displayCard() {
    const faceCards = { 'J': 'Jack', 'Q': 'Queen', 'K': 'King', 'A': 'Ace' };
    const name = faceCards[this.value] || this.value;
    return `${name} of ${this.suit}`;
  }

  isFaceCard() {
    return (this.value === 'K' || this.value === 'Q' || this.value === 'J');
  }
}

class User {
  constructor(hand) {
    this.hand = hand;
  }

  displayHand() {
    let displayHand = this.hand.map(card => {
      return card.displayCard();
    });
    return displayHand.join(', ');
  }

  hit(deck) {
    this.hand.push(deck.dealCard());
  }

  getHandTotal() {
    let handTotal = 0;
    let handHasAce = false;
    this.hand.forEach(card => {
      if (card.isFaceCard()) {
        handTotal += 10;
      } else if (card.value === 'A') {
        handHasAce = true;
        handTotal += 1;
      } else {
        handTotal += parseInt(card.value, 10);
      }
    });
    if (handTotal <= 11 && handHasAce) {
      handTotal += 10;
    }
    return handTotal;
  }

  busted() {
    return (this.getHandTotal() > 21);
  }

}

class Player extends User {
  constructor(hand) {
    super(hand);
  }

  requestAction() {
    const rlSync = require('readline-sync');
    let action;
    do {
      action = rlSync.question("Would you like to hit(h) or stay(s)? ")[0]?.toLowerCase();
    } while (action !== 'h' && action !== 's');
    return action;
  }

  playAgain() {
    const rlSync = require('readline-sync');
    let action = rlSync.question("Would you like to play again (y) or (n)? ")[0].toLowerCase();
    return (action === 'y');
  }
}

class Dealer extends User{
  constructor(hand) {
    super(hand);
  }
}

class Deck {
  constructor() {
    this.cards = this.shuffleDeck();
  }

  shuffleDeck() {
    let cards = [];
    for (let suit in Card.SUITS) {
      for (let value in Card.VALUES) {
        cards.push(new Card(Card.SUITS[suit], Card.VALUES[value]));
      }
    }
    var shuffle = require('shuffle-array');
    shuffle(cards);
    return cards;
  }

  dealCard() {
    return this.cards.pop();
  }

  dealHand() {
    return [this.dealCard(), this.dealCard()];
  }
}

class Game {
  start() {
    this.startingGreeting();
    this.deck = new Deck();
    this.player = new Player(this.deck.dealHand());
    this.dealer = new Dealer(this.deck.dealHand());
    this.beginGameLoop();
    let playAgain = this.player.playAgain();
    if (playAgain) {
      console.clear();
      this.startGame();
    }

  }

  startingGreeting() {
    console.log("Hello and welcome to 21. Let's play some blackjack!\n");
  }

  beginGameLoop() {
    console.log(`Dealer shows ${this.dealer.hand[0].displayCard()}.`);
    console.log(`You have ${this.player.displayHand()}.\nTotal: ${this.player.getHandTotal()}`);
    let action = this.player.requestAction();
    this.playPlayerTurn(action);

    if (this.player.busted()) {
      console.log('You busted! You lose!');
    } else {
      console.log(`You decide to stay.`);
      this.playDealerTurn();
      
      if (this.dealer.busted()) {
        console.log('Dealer busted! You win!');
      } else {
        this.displayResults();
      }
    }
  }

  playPlayerTurn(action) {
    while (action === 'h') {
      this.player.hit(this.deck);
      console.log(`You hit. You now have ${this.player.displayHand()}.\nTotal: ${this.player.getHandTotal()}`);
      if (this.player.busted()) break;
      action = this.player.requestAction();
      
    }
  }

  playDealerTurn() {
    console.log(`Dealer shows: ${this.dealer.displayHand()}`);
    while (this.dealer.getHandTotal() < 17) {
      console.log('Dealer hits.');
      this.dealer.hit(this.deck);
      console.log(`Dealer has: ${this.dealer.displayHand()}`);
    }
  }

  displayResults() {
    let playerHandTotal = this.player.getHandTotal();
    let dealerHandTotal = this.dealer.getHandTotal();
    console.log(`You have ${playerHandTotal}. Dealer has ${dealerHandTotal}`);
    if (playerHandTotal > dealerHandTotal) {
      console.log('You win!');
    } else if (dealerHandTotal > playerHandTotal) {
      console.log('You lose!');
    } else {
      console.log("It's a push");
    }
  }

  
}

new Game().start();

