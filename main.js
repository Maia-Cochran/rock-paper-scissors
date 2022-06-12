//querySelectors
var classicChoice = document.querySelector('.game-classic');
var spicyChoice = document.querySelector('.game-spicy');
var gameVersionView = document.querySelector('.game-choice-container');
var gameVersionText = document.querySelector('.choose-game-view');
var chooseBuddyView = document.querySelector('.choose-buddy-view');
var chooseBuddyText = document.querySelector('.choose-buddy-text');
var buddiesContainer = document.querySelector('.buddies-container')
var alienImg = document.querySelector('.spicy-buddy1');
var ufoImg = document.querySelector('.spicy-buddy2');
var rockImg = document.querySelector('.classic-buddy1');
var paperImg = document.querySelector('.classic-buddy2');
var scissorsImg = document.querySelector('.classic-buddy3');
var spicyDudeLeft = document.querySelector('.spicy-score-left');
var spicyDudeRight = document.querySelector('.spicy-score-right');
var classicDudeLeft = document.querySelector('.classic-score-left');
var classicDudeRight = document.querySelector('.classic-score-right');
var spicyTitle1 = document.querySelector('.spicy-title1');
var spicyTitle2 = document.querySelector('.spicy-title2');

//eventListeners
classicChoice.addEventListener('click', displayClassic);
spicyChoice.addEventListener('click', displaySpicy);


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
}

function displaySpicy(){
  hide(gameVersionView);
  hide(gameVersionText);
  show(chooseBuddyView);
  show(chooseBuddyText);
  show(buddiesContainer);
  show(spicyDudeRight);
  show(spicyDudeLeft);
  show(alienImg);
  show(ufoImg);
  show(spicyTitle1);
  show(spicyTitle2);
}
