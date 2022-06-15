class Player {
  constructor(name, token){
    this.name = name;
    this.token = '';
    this.wins = 0;
    this.choice = '';
    this.winner = false;
  }
  takeTurn(){
    if(newGame.gameVersionChosen === 'classic'){
    var classicBuddies = ['rock', 'paper', 'scissors'];
    newGame.computer.choice = classicBuddies[Math.floor(Math.random() * classicBuddies.length)];
  } else if(newGame.gameVersionChosen === 'spicy'){
    var spicyBuddies = ['rock', 'paper', 'scissors', 'ufo', 'alien'];
    newGame.computer.choice = spicyBuddies[Math.floor(Math.random() * spicyBuddies.length)];
    }
    console.log(newGame)
  }
  winCount(){
    this.wins++
  }
}
