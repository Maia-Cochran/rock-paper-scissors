class Game {
  constructor(user, computer){
    this.id = Date.now();
    this.user = new Player ("user", "🤠") ;
    this.computer = new Player ("computer", "💻 ");
    this.gameVersionChosen = 'classic' || 'spicy';
    this.classicBuddyChoices = ['rock', 'paper', 'scissors'];
    this.spicyBuddyChoices = ['rock', 'paper', 'scissors', 'alien', 'ufo'];
    this.userWinner = true;
  }
  checkForWinner(userChoice, generatedChoice){
    if(userChoice === generatedChoice){
      return `Great minds think alike! It's a tie 🤪 `
    } else if(userChoice === 'rock' && generatedChoice === 'paper' || generatedChoice === 'UFO'){
      this.computer.winCount();
      this.userWinner = false;
    } else if(userChoice === 'rock' && generatedChoice === 'scissors' || generatedChoice === 'alien'){
      this.user.winCount();
      this.userWinner = true;
    } else if(userChoice === 'paper' && generatedChoice === 'scissors' || generatedChoice === 'alien'){
      this.computer.winCount();
      this.userWinner = false;
    } else if(userChoice === 'paper' && generatedChoice === 'rock' || generatedChoice === 'UFO'){
      this.user.winCount();
      this.userWinner = true;
    } else if(userChoice === 'scissors' && generateChoice === 'paper' || generatedChoice === 'alien'){
      this.user.winCount();
      this.userWinner = true;
    } else if(userChoice === 'scissors' && generatedChoice === 'rock' || generatedChoice === 'UFO'){
      this.computer.winCount();
      this.userWinner = false;
    } else if(userChoice === 'alien' && generatedChoice === 'rock' || generatedChoice === 'scissors'){
      this.computer.winCount();
      this.userWinner = false;
    } else if(userChoice === 'alien' && generatedChoice === 'paper' || generatedChoice === 'UFO'){
      this.user.winCount();
      this.userWinner = true;
    } else if(userChoice === 'UFO' && generatedChoice === 'scissors' || generatedChoice === 'rock'){
      this.user.winCount();
      this.userWinner = true;
    } else if(userChoice === 'UFO' && generatedChoice === 'alien' || generatedChoice === 'paper')
    this.computer.winCount();
    this.userWinner = false;
  }
}
