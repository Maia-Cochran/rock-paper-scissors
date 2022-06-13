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


//eventListeners
classicGame.addEventListener('click', displayClassic);
spicyGame.addEventListener('click', displaySpicy);
rock.addEventListener('click', playRound);

// paperImg.addEventListener('click', userWinsByPaper);
// scissorsImg.addEventListener('click', userWinsByScissors);
// alienImg.addEventListener('click', userWinsByAlien);
// ufoImg.addEventListener('click', userWinsByUfo);

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
  newGame.startGame(classicGame);
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
  newGame.startGame(spicyGame);
}

//functions for choice-making
newGame.computer.choice = newGame.computer.playRoundClassic();
newGame.user.choice = 'rock';
function playRound(){
  newGame.startGame
  if (newGame.gameVersionChosen === classicGame){
    newGame.computer.playRoundClassic(rock);
    newGame.checkForWinner();
  }
  console.log(playRound())
}

  // if (gameVersionChosen === 'spicy'){
  //   var buddies = ['rock', 'paper', 'scissors', 'alien', 'ufo'];
  //   return buddies = [Math.floor(Math.random() * buddies.length)];
  // }



//temporary reject functions
// var rockGame = new Game();
// if(gameVersionChosen === 'classic'){
//   displayClassic();
//   hide(paperImg);
//   hide(scissorsImg);
// } else if(gameVersionChosen === 'spicy'){
//   displaySpicy();
//   hide(paperImg);
//   hide(scissorsImg);
//   hide(alienImg);
//   hide(ufoImg);
// }
//   checkForWinner();
// }
// return chooseBuddyText.innerText = `Nice! Rock buddy was chosen!`
