//querySelectors
var newGame = new Game();
var classicGame = document.querySelector('.game-classic');
var spicyGame= document.querySelector('.game-spicy');
var gameVersionView = document.querySelector('.game-choice-container');
var gameVersionText = document.querySelector('.choose-game-view');
var goHomeButton = document.querySelector('.go-home');
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
var resetScores = document.querySelector('.score-reset');

//eventListeners
classicGame.addEventListener('click', displayClassic);
spicyGame.addEventListener('click', displaySpicy);
rock.addEventListener('click', determineUserChoice);
paper.addEventListener('click', determineUserChoice);
scissors.addEventListener('click', determineUserChoice);
alien.addEventListener('click', determineUserChoice);
ufo.addEventListener('click', determineUserChoice);
goHomeButton.addEventListener('click', displayHome);
resetScores.addEventListener('click', scoresAtZero);

//helper functions
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
  hide(alien);
  hide(ufo);
  show(chooseBuddyView);
  show(chooseBuddyText);
  show(buddiesContainer);
  show(classicDudeLeft);
  show(classicDudeRight);
  show(scissors);
  show(paper);
  show(rock);
  show(userScore);
  show(compScore);
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
  show(scissors);
  show(paper);
  show(rock);
  show(spicyTitle1);
  show(spicyTitle2);
  show(userScore);
  show(compScore);
  newGame.startGame('spicy');
}

function displayHome(){
  show(gameVersionView);
  show(gameVersionText);
  hide(chooseBuddyView);
  hide(chooseBuddyText);
  hide(buddiesContainer);
  hide(classicDudeLeft);
  hide(classicDudeRight);
  hide(spicyDudeRight);
  hide(spicyDudeLeft);
  hide(alien);
  hide(ufo);
  hide(scissors);
  hide(paper);
  hide(rock);
  hide(userScore);
  hide(compScore);
  newGame.startGame();
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
    setTimeout(resetGame, 2900);
  } else if(newGame.user.winner === true){
    chooseBuddyText.innerText = `🎉 You win! 🎉

    Your ${newGame.user.choice} buddy beats my ${newGame.computer.choice}!

    Well-played, my friend. 😎`
    setTimeout(resetGame, 2900);
  } else if(newGame.computer.winner === true){
    chooseBuddyText.innerText = `Ah ha! I knew I could do it. 😏

    My buddy ${newGame.computer.choice} beats your ${newGame.user.choice}!

    🥺 You lose! 🥺`
    setTimeout(resetGame, 2900);
  }
}

function resetGame(){
  newGame.startGame();
  newGame.user.winner = false;
  newGame.computer.winner = false;
  chooseBuddyText.innerText = `Choose another buddy to keep playing!`
}

function showScore(){
  userScore.innerText = newGame.user.wins;
  compScore.innerText = newGame.computer.wins;
}

function scoresAtZero(){
  newGame.user.wins = 0;
  newGame.computer.wins = 0;
  showScore();
  resetGame();
}
