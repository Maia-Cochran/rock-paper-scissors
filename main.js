//querySelectors
var newGame = new Game();
var classicGame = document.querySelector('.game-classic');
var spicyGame= document.querySelector('.game-spicy');
var gameVersionView = document.querySelector('.game-choice-container');
var gameVersionText = document.querySelector('.choose-game-view');
var chooseBuddyView = document.querySelector('.choose-buddy-view');
var chooseBuddyText = document.querySelector('.choose-buddy-text');
var buddiesContainer = document.querySelector('.buddies-container')
var alien = document.querySelector('.alien-buddy');
var ufo = document.querySelector('.ufo-buddy');
var rock = document.querySelector('.rock-buddy');
var paper = document.querySelector('.paper-buddy');
var scissors = document.querySelector('.scissors-buddy');
var spicyDudeLeft = document.querySelector('.spicy-score-left');
var spicyDudeRight = document.querySelector('.spicy-score-right');
var classicDudeLeft = document.querySelector('.classic-score-left');
var classicDudeRight = document.querySelector('.classic-score-right');
var spicyTitle1 = document.querySelector('.spicy-title1');
var spicyTitle2 = document.querySelector('.spicy-title2');

//global variables
  var classicBuddies = ['rock', 'paper', 'scissors'];
  var spicyBuddies = ['rock', 'paper', 'scissors', 'ufo', 'alien'];

function getRandomItemFromArray(array) {
  var randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex]
}

//eventListeners
classicGame.addEventListener('click', displayClassic);
spicyGame.addEventListener('click', displaySpicy);
rock.addEventListener('click', determineUserChoice);
paper.addEventListener('click', determineUserChoice);
scissors.addEventListener('click', determineUserChoice);
alien.addEventListener('click', determineUserChoice);
ufo.addEventListener('click', determineUserChoice);

//functions
//helper functions!
function hide(elements){
    elements.classList.add('hidden');
}

function show(elements){
    elements.classList.remove('hidden');
}

//functions for view changes
function displayClassic(){
  hide(gameVersionView);
  hide(gameVersionText);
  show(chooseBuddyView);
  show(chooseBuddyText);
  show(buddiesContainer);
  show(classicDudeLeft);
  show(classicDudeRight);
  newGame.gameVersionChosen = 'classic';
}

function displaySpicy(){
  hide(gameVersionView);
  hide(gameVersionText);
  show(chooseBuddyView);
  show(chooseBuddyText);
  show(buddiesContainer);
  show(spicyDudeRight);
  show(spicyDudeLeft);
  show(alien);
  show(ufo);
  show(spicyTitle1);
  show(spicyTitle2);
  newGame.gameVersionChosen = 'spicy';
}


//functions for choice-making
function determineUserChoice(){
  newGame.user.choice = event.target.id;
  newGame.computer.computerChoiceRandom();
  newGame.checkForWinner()
}
//^^^ mathcing user click to specific img from page^^^





//temporary reject functions
// function declareWinner(winner){
// if (this.winner = 'user'){
//   return `🎉 You win! 🎉 `
// } else if (this.winner = 'computer'){
//   return `You lost! 🥺  Try again.`
// } else if(this.winner = 'tie'){
//   return `Great minds think alike! It's a tie 🤪 `
// }
// ^^^use innerText/innerHTML^^^
// }
// return chooseBuddyText.innerText = `Nice! Rock buddy was chosen!`
