class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
  }
  playRound(gameVersionChosen){
    if (gameVersionChosen === 'classic'){
      var buddies = ['rock', 'paper', 'scissors'];
      return buddies = [Math.floor(Math.random() * buddies.length)];
    }
    if (gameVersionChosen === 'spicy'){
      var buddies = ['rock', 'paper', 'scissors', 'alien', 'ufo'];
      return buddies = [Math.floor(Math.random() * buddies.length)];
    }
  }
  winCount(){
    this.wins++;
  }
}
