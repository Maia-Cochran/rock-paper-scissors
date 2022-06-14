class Player {
  constructor(name, token){
    this.name = name;
    this.token = '';
    this.wins = 0;
    this.choice = '';
  }
  takeTurn(){
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
  }




    // } else if(this.token === paper){
    //   this.choice === `paper`;
    // } else if(this.token === scissors){
    //   this.choice === `scissors`
    // } else if(this.token === alien){
    //   this.choice === `alien`
    // } else if(this.token === ufo){
    //   this.choice === `ufo`
    // }
    // }
//   }
// }
