//querySelectors
var classicChoice = document.querySelector('.game-classic');
var spicyChoice = document.querySelector('.game-spicy');
var gameVersionView = document.querySelector('.choose-game-view');
var chooseBuddyView = document.querySelector('.chooseBuddyView');
var alienImg = document.querySelector('.spicy-buddy1');
var ufoImg = document.querySelector('.spicy-buddy2');
var rockImg = document.querySelector('.classic-buddy1');
var paperImg = document.querySelector('.classic-buddy2');
var scissorsImg = document.querySelector('.classic-buddy3');

//eventListeners
classicChoice.addEventListener('click', displayClassic);
spicyChoice.addEventListener('click', displaySpicy);


//functions
//helper functions!
function hide(views){
  for (var i = 0; i < views.length; i++) {
    views[i].classList.add('hidden');
  }
}

function show(views){
  for (var i = 0; i < views.length; i++){
    views[i].classList.remove('hidden');
  }
}

//functions for view changes
function displayClassic(){
  hide(gameVersionView);
  show(chooseBuddyView);
  console.log()
}

function displaySpicy(){
  hide(gameVersionView);
  show(alienImg, ufoImg);
}
