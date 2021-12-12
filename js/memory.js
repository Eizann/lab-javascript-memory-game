export default class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }


  shuffleCards(cards) {
    // ... write your code here
    if (!this.cards) return undefined;
    let m = this.cards.length, t, i;
    // While there remain elements  toshuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
    return this.cards;
  }


  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } return false;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed < (this.cards.length / 2)) {
      return false;
    } else if (this.pairsGuessed === this.cards.length / 2) {
      alert('You won the game !');
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
