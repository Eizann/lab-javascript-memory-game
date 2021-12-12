import MemoryGame from './memory.js';

const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  const pairsGuessedScore = document.getElementById('pairs-guessed');
  const pairsClicked = document.getElementById('pairs-clicked');

  // Bind the click event of each element to a function

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      cardsChosen.push(card);
      card.classList.toggle('turned', 'turned');
      memoryGame.pickedCards.push(card.attributes[1].nodeValue)
      let cardsChosen = [];

      setTimeout(function () {
        if (memoryGame.pickedCards.length === 2) {
          if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
            cardsChosen[0].classList.add('blocked');
            cardsChosen[1].classList.add('blocked');
            memoryGame.pickedCards = [];
            cardsChosen = [];
          } else {
            cardsChosen[0].classList.toggle('turned');
            cardsChosen[1].classList.toggle('turned');
            memoryGame.pickedCards = [];
            cardsChosen = [];
          }
          pairsGuessedScore.innerHTML = memoryGame.pairsGuessed;
          pairsClicked.innerHTML = memoryGame.pairsClicked;
          memoryGame.checkIfFinished();
        }
      }, 1000);
    });
  });
});
