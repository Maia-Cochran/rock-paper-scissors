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
var userScore = document.querySelector('.user-win-count');
var compScore = document.querySelector('.computer-win-count');

//global variables
  var classicBuddies = ['rock', 'paper', 'scissors'];
  var spicyBuddies = ['rock', 'paper', 'scissors', 'ufo', 'alien'];

//eventListeners
classicGame.addEventListener('click', displayClassic);
spicyGame.addEventListener('click', displaySpicy);
rock.addEventListener('click', determineUserChoice);
paper.addEventListener('click', determineUserChoice);
scissors.addEventListener('click', determineUserChoice);
alien.addEventListener('click', determineUserChoice);
ufo.addEventListener('click', determineUserChoice);

//helper functions
function hide(elements){
  elements.classList.add('hidden');
}

function show(elements){
  elements.classList.remove('hidden');
}

function getRandomItemFromArray(array) {
  var randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex]
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
}

//functions for choice-making
function determineUserChoice(){
  newGame.user.choice = event.target.id;
  newGame.computer.takeTurn();
  newGame.checkForWinner();
  showWinner();
  showScore();
}

function showWinner(){
  if(newGame.user.choice === newGame.computer.choice){
    chooseBuddyText.innerText = `Great minds think alike! 👯‍♀️

    We both picked ${newGame.user.choice} as our buddy!

    🤪 It's a tie 🤪`
  } else if(newGame.user.winner === true){
    chooseBuddyText.innerText = `🎉 You win! 🎉

    Your ${newGame.user.choice} buddy beats my ${newGame.computer.choice}!

    Well-played, my friend. 😎`
  } else if(newGame.computer.winner === true){
    chooseBuddyText.innerText = `Ah ha! I knew I could do it. 😏

    My buddy ${newGame.computer.choice} beats your ${newGame.user.choice}!

    🥺 You lose! 🥺`
  }
  setTimeout(resetGame, 2900);
}

function resetGame(){
  newGame.startGame();
  newGame.user.winner = false;
  newGame.computer.winner = false;
  chooseBuddyText.innerText = `Choose another buddy to keep playing!`
}

function showScore(){
  userScore.innerText = newGame.user.wins
  compScore.innerText = newGame.computer.wins
}
