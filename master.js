
let flipCard = document.getElementsByClassName('flipCard');
let card1 = document.getElementById('a1')
let flipCardInner = document.getElementsByClassName('flip-card-inner');

// /* Do an horizontal flip when you move the mouse over the flip box container */

//
// let selectRandom = (array) => array[Math.floor(Math.random()* array.length)];

function buttonClick (buttonId, executeFn) { buttonId.addEventListener('hover', executeFn);
};

function flip () {
  card1.style.transform = 'rotateY(180deg)';
};

buttonClick(card1, flip);
