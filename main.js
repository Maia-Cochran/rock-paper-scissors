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
var spicyBuddies = [rock, paper, scissors, ufo, alien];
var classicBuddies = [rock, paper, scissors];

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
  newGame.computer.choice = newGame.computer.computerChoiceRandom();
  // newGame.checkForWinner()
  console.log(event.target.id, 'meep')
}
//^^^ mathcing user click to specific img from page^^^


// function playRound(){
//   // newGame.user.takeTurn();
//   // newGame.computer.takeTurn();
//   // determineUserChoice();
//   // if (){
//       newGame.startGame(classicGame);
//       newGame.computer.playRoundClassic();
//   // } else if(){
//       newGame.startGame(spicyGame);
//       newGame.computer.playRoundSpicy();
//   }
//   newGame.checkForWinner();
// }
//^^^ selecting game version and randomizing computer choice ^^^

// function chooseThisBuddy(){
//   if(rock.clicked){
//     newGame.user.choice === `rock`
//   }
//   newGame.checkForWinner(`rock`)
// }


//
// function chooseBuddy(){
// //   for (var i = 0; i < buddies.length){
// //
// //   }
// // }
//
//    if(scissors.clicked){
//     newGame.user.choice === `scissors`;
//   }
//     // } else if(newGame.user.choice === paper){
// //   //   newGame.checkForWinner(`paper`);
//     newGame.checkForWinner(`rock`)
//   }
//   }
// }
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
// } ^^^use innerText/innerHTML^^^



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
