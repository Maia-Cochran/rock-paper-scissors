class Player {
  constructor(name, token){
    this.name = name;
    this.token = '';
    this.wins = 0;
    this.choice = '';
  }
  computerChoiceRandom(){
    if(game.gameVersionChosen === 'classic'){
      game.computer.choice = classicBuddies[Math.floor(Math.random() * classicBuddies.length)];
    } else if(game.gameVersionChosen === 'spicy'){
      game.computer.choice = spicyBuddies[Math.floor(Math.random() * spicyBuddies.length)]
    }
  }
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
  winCount(){
    this.wins++;
  }



  // takeTurn(userChoice, buddyChoices){
  //   if(this.name === 'user'){
  //     this.choice = userChoice;
  //   if(this.name === 'computer'){
  //     this.choice = buddyChoices[Math.floor(Math.random() * buddyChoices.length)].id
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
