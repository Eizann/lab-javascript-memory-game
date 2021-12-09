class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }


  shuffleCards(cards) {
    // ... write your code here
    if (!cards) return undefined;
    let i = cards.length;
    let k = 0;
    let tmp = 0;
    while (--i > 0) {
      k = Math.floor(Math.random() * (i + 1));
      tmp = cards[k];
      cards[k] = cards[i];
      cards[i] = tmp;
    }
    return cards;
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
    } else return true;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
