class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.choice = '';
  }
  playRoundClassic(){
    var buddies = ['rock', 'paper', 'scissors'];
    var buddyRandomClassic = [Math.floor(Math.random() * buddies.length)];
    return buddies[buddyRandomClassic];
  }
  playRoundSpicy(){
    var buddies = ['rock', 'paper', 'scissors', 'alien', 'ufo'];
    var buddyRandomSpicy = [Math.floor(Math.random() * buddies.length)];
    return buddies[buddyRandomSpicy];
    }
  winCount(){
    this.wins++;
  }
}
