class Player {
  constructor(name, token){
    this.name = name;
    this.token = '';
    this.wins = 0;
    this.choice = '';
  }
  computerChoiceRandom(){
    if(newGame.gameVersionChosen === 'classic'){
    newGame.computer.choice = classicBuddies[Math.floor(Math.random() * classicBuddies.length)];
  } else if(newGame.gameVersionChosen === 'spicy'){
    newGame.computer.choice = spicyBuddies[Math.floor(Math.random() * spicyBuddies.length)];
    }
  }
  winCount(){
    // if(newGame.user.winner === 'user' || 'computer'){
      this.wins++
    }
  // }



  // takeTurn(userChoice, buddyChoices){
  //   if(this.name === 'user'){
  //     this.choice = userChoice;
  //   if(this.name === 'computer'){
  //     this.choice = buddyChoices[Math.floor(Math.random() * buddyChoices.length)].id
  //   }

  // playRoundClassic(){
  //   var buddies = ['rock', 'paper', 'scissors'];
  //   var buddyRandomClassic = [Math.floor(Math.random() * buddies.length)];
  //   game.computer.choice = buddies.buddyRandomClassic;
  // }
  // playRoundSpicy(){
  //   var buddies = ['rock', 'paper', 'scissors', 'alien', 'ufo'];
  //   var buddyRandomSpicy = [Math.floor(Math.random() * buddies.length)];
  //   game.computer.choice = buddies.buddyRandomSpicy;
  //   }





    // } else if(this.token === paper){
    //   this.choice === `paper`;
    // } else if(this.token === scissors){
    //   this.choice === `scissors`
    // } else if(this.token === alien){
    //   this.choice === `alien`
    // } else if(this.token === ufo){
    //   this.choice === `ufo`
    // }
    }
//   }
// }
