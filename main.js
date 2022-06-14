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
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
alien.addEventListener('click', playRound);
ufo.addEventListener('click', playRound);

console.log(rock)

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
  // newGame.startGame(classicGame);
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
  // newGame.startGame(spicyGame);
}

//functions for choice-making
function playRound(){
  // chooseBuddy();
  if (newGame.gameVersionChosen === 'classic'){
    newGame.playRoundClassic();
  } else if(newGame.gameVersionChosen === 'spicy'){
    newGame.playRoundSpicy();
  }
  newGame.checkForWinner(newGame.userChoice);
}

// function chooseUserBuddy(){
//   for (var i = 0; i < buddies.length){
//
//   }
// }

function chooseBuddy(){
  if(scissors.clicked){
    newGame.user.choice === `scissors`;
  // } else if(newGame.user.choice === paper){
  //   newGame.checkForWinner(`paper`);
    // newGame.checkForWinner(`scissors`)
  }
}
// }
  // } else if(scissors.clicked){
  //  newGame.user.choice = `scissors`;
  // } else if(alien.clicked){
  //  newGame.user.choice = `alien`
  // } else if(ufo.clicked){
  //  newGame.user.choice = `ufo`
  // }
  // newGame.checkForWinner();
 // }

// function chooseClassicGame(){
//   newGame.gameVersionChosen = 'classic';
//   displayClassic();
// }

// declareWinner(winner){
// if (this.winner = 'user'){
//   return `🎉 You win! 🎉 `
// } else if (this.winner = 'computer'){
//   return `You lost! 🥺  Try again.`
// } else if(this.winner = 'tie'){
//   return `Great minds think alike! It's a tie 🤪 `
// }
// }


// function userMakesChoice(){
//   rock =
//   }
//   playRound();
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
