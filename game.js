class Game {
  constructor(user, computer){
    this.id = Date.now();
    this.user = new Player ("user", "🤠") ;
    this.computer = new Player ("computer", "💻 ");
    this.gameVersionChosen = 'classic' || 'spicy';
    // this.classicBuddyChoices = ['rock', 'paper', 'scissors'];
    // this.buddyChoices = ['rock', 'paper', 'scissors', 'alien', 'ufo'];
    this.winner;
  }
    checkForWinner(){
      if (this.user.choice === this.computer.choice){
        this.winner = 'tie';
      } else if(this.user.choice === 'rock' && this.computer.choice === 'alien' ||
      this.user.choice === 'rock' && this.computer.choice === 'scissors' ||
      this.user.choice === 'paper' && this.computer.choice === 'rock' ||
      this.user.choice === 'paper' && this.computer.choice === 'ufo' ||
      this.user.choice === 'scissors' && this.computer.choice === 'paper' ||
      this.user.choice === 'scissors' && this.computer.choice === 'alien' ||
      this.user.choice === 'alien' && this.computer.choice === 'paper' ||
      this.user.choice === 'alien' && this.computer.choice === 'ufo' ||
      this.user.choice === 'ufo' && this.computer.choice === 'scissors' ||
      this.user.choice === 'ufo' && this.computer.choice === 'rock'){
        this.user.winCount();
        this.winner = this.user.name;
      } else {
        this.computer.winCount();
        this.winner = this.computer.name;
      }
    }
  }


// checkForWinner(){
    // if(userChoice === generatedChoice){
    // this.user.wins = 0;
    // this.computer.wins = 0;
    // return `Great minds think alike! It's a tie 🤪 `
  // }

  // } else if(this.user.choice  === 'rock' && this.computer.choice === 'scissors' || this.computer.choice === 'alien'){

    // } else if(this.user.choice === 'paper' && this.computer.choice === 'rock' || this.computer.choice === 'UFO'){

  // } else if(this.user.choice === 'scissors' && this.computer.choice === 'paper' || this.computer.choice === 'alien'){

  // } else if(this.user.choice === 'alien' && this.computer.choice === 'paper' || this.computer.choice === 'UFO'){

  // } else if(this.user.choice === 'UFO' && this.computer.choice === 'scissors' || this.computer.choice === 'rock'){

  //   // return `🎉 You win! 🎉 `
