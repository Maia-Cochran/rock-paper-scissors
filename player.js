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
    this.wins++
  }
}
