//querySelectors
var classicChoice = document.getElementById('#classic-button');
var spicyChoice = document.getElementById('#spicy-button');
var gameVersionView = document.querySelector('.choose-game-view');
var chooseBuddyView = document.querySelector('.chooseBuddyView');

//eventListeners
classicChoice.addEventListener('click', displayClassic);
spicyChoice.addEventListener('click', displaySpicy);


//functions
function displayClassic(){
  hide(gameVersionView);
  show(chooseBuddyView);
  console.log()
}

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
