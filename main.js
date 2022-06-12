//querySelectors
var classicChoice = document.querySelector('.game-classic');
var spicyChoice = document.querySelector('.game-spicy');
var gameVersionView = document.querySelector('.game-choice-container');
var chooseBuddyView = document.querySelector('.choose-buddy-view');
var chooseBuddyText = document.querySelector('.choose-buddy-text');
var buddiesContainer = document.querySelector('.buddies-container')
var alienImg = document.querySelector('.spicy-buddy1');
var ufoImg = document.querySelector('.spicy-buddy2');
var rockImg = document.querySelector('.classic-buddy1');
var paperImg = document.querySelector('.classic-buddy2');
var scissorsImg = document.querySelector('.classic-buddy3');
var spicyIcons = document.querySelectorAll('#spicy-dudes');
var classicIcons = document.querySelectorAll('#classic-dudes');


//eventListeners
classicChoice.addEventListener('click', displayClassic);
// spicyChoice.addEventListener('click', displaySpicy);


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
  // event.preventDefault();
  hide(gameVersionView);
  // hide(spicyIcons);
  // show(chooseBuddyView);
  // show(classicIcons);
  show(chooseBuddyText);
  // show(buddiesContainer);
}

// function displaySpicy(){
//   hide(gameVersionView);
//   unhide(chooseBuddyView);
//   unhide(alienImg, ufoImg);
//   unhide(spicyIcons);
// }
