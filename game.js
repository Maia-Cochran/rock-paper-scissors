class Game {
  constructor(user, computer){
    this.id = Date.now();
    this.user = new Player ("user", "🤠") ;
    this.computer = new Player ("computer", "💻 ");
    this.gameVersionChosen = 'classic' || 'spicy';
    this.classicBuddyChoices = ['rock', 'paper', 'scissors'];
    this.spicyBuddyChoices = ['rock', 'paper', 'scissors', 'alien', 'ufo'];
    this.userWinner = true || false;
    // this.userChoice = '';
    // this.generatedChoice = '';
  }
  checkForWinner(){
      // if(userChoice === generatedChoice){
      // this.user.wins = 0;
      // this.computer.wins = 0;
      // return `Great minds think alike! It's a tie 🤪 `
    // }
    if(this.user.choice === 'rock' && this.computer.choice === 'paper' || this.computer.choice === 'UFO'){
      this.computer.winCount();
      return this.userWinner = false;
    } else if(this.user.choice  === 'rock' && this.computer.choice === 'scissors' || this.computer.choice === 'alien'){
      this.user.winCount();
      return this.userWinner = true;
    } else if(this.user.choice === 'paper' && this.computer.choice === 'scissors' || this.computer.choice === 'alien'){
      this.computer.winCount();
      return this.userWinner = false;
    } else if(this.user.choice === 'paper' && this.computer.choice === 'rock' || this.computer.choice === 'UFO'){
      this.user.winCount();
      return this.userWinner = true;
    } else if(this.user.choice === 'scissors' && this.computer.choice === 'paper' || this.computer.choice === 'alien'){
      this.user.winCount();
      return this.userWinner = true;
    } else if(this.user.choice === 'scissors' && this.computer.choice === 'rock' || this.computer.choice === 'UFO'){
      this.computer.winCount();
      return this.userWinner = false;
    } else if(this.user.choice === 'alien' && this.computer.choice === 'rock' || this.computer.choice === 'scissors'){
      this.computer.winCount();
      return this.userWinner = false;
    } else if(this.user.choice === 'alien' && this.computer.choice === 'paper' || this.computer.choice === 'UFO'){
      this.user.winCount();
      return this.userWinner = true;
    } else if(this.user.choice === 'UFO' && this.computer.choice === 'scissors' || this.computer.choice === 'rock'){
      this.user.winCount();
      return this.userWinner = true;
      // return `🎉 You win! 🎉 `
    } else if(this.user.choice === 'UFO' && this.computer.choice === 'alien' || this.computer.choice === 'paper'){
      this.computer.winCount();
      return this.userWinner = false;
      // return `🥺  You lose! 🥺 `
    }
  }
}
