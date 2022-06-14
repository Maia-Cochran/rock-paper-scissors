//WHAT is left?
//Create a method for the game reset button
//display message and winning character once icon clicked
//when icon is clicked, set pause/time-out to display
//the winning icon & msg for 1 full seccond
//create function for displaying points earned/score
//likely going to be using a push method oooorrrrrr could be
//a method that will just update the output on the view being displayed
//refactor, refactor, refactor


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
  newGame.startGame('classic');
  // newGame.gameVersionChosen = 'classic';
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
  newGame.startGame('spicy');
  // newGame.gameVersionChosen = 'spicy';
}

//functions for choice-making
function determineUserChoice(){
  newGame.user.choice = event.target.id;
  newGame.computer.takeTurn();
  newGame.checkForWinner();
  showWinner();
  resetGame();
  console.log(resetGame, "wtF")
}

function showWinner(){
  if(newGame.computer.wins){
    chooseBuddyText.innerText = `You lost! 🥺  Try again.`;
  } else if(newGame.user.wins){
    chooseBuddyText.innerText = `🎉 You win! 🎉 `
  } else {
    chooseBuddyText.innerText = `Great minds think alike! It's a tie 🤪 `
  }
}

function resetGame(){
  // chooseBuddyText.innerText = `Choose your buddy!`
  if (newGame.gameVersionChosen === 'classic') {
    window.setTimeout(displayClassic, 2500)
  } else {
    window.setTimeout(displaySpicy, 2500);
  }
}















//^^^ matching user click to specific img from page^^^


// return chooseBuddyText.innerText = `Nice! Rock buddy was chosen!`
