class Player {
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
    this.wins = 0;
    this.choice = [];
  }
  playRoundClassic(){
    var buddies = ['rock', 'paper', 'scissors'];
    var buddyRandomClassic = [Math.floor(Math.random() * buddies.length)];
    return this.choice.push(buddies[buddyRandomClassic])
  }
  // playRoundSpicy (buddyChoiceClicked){
  //   var buddies = ['rock', 'paper', 'scissors', 'alien', 'ufo'];
  //   var buddyRandomSpicy = [Math.floor(Math.random() * buddies.length)];
  //   // return buddyChoiceClicked[]|  buddies[buddyRandomSpicy];
  //   }
  winCount(){
    this.wins += 1;
  }
}
