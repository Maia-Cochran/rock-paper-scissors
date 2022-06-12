class Player {
  constructor(win, score){
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

//create an array, housing the buddy options
//need a randomizer method to generate the computer's response
//should have a method for each game choice
//update wins and keep score


//if the returned class name matches the returned class,
//then it is a tie, if it equals either of the other ones,
//one person will win
//when the person wins, the score will increase and push
//to the winning score and update it to reflect +1
