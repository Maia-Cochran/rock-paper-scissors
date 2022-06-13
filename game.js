class Game {
  constructor(user, computer){
    this.id = Date.now();
    this.user = new Player ("user", "🤠") ;
    this.computer = new Player ("computer", "💻 ");
    this.gameVersionChosen = '';
    this.winnerName = '';
    this.isWinning = true;
    this.userChoice = '';
    // this.computerChoice = this.computer.playRoundClassic;
  }
    checkForWinner(){
      if (this.userChoice === this.computer.choice){
        this.winner = 'tie';
      } else if(this.user.choice === 'rock' && this.computer.choice === 'alien' ||
      this.userChoice === 'rock' && this.computer.choice === 'scissors'||
      this.userChoice === 'paper' && this.computer.choice === 'rock' ||
      this.userChoice === 'paper' && this.computer.choice === 'ufo' ||
      this.userChoice === 'scissors' && this.computer.choice === 'paper'||
      this.userChoice === 'scissors' && this.computer.choice === 'alien'  ||
      this.userChoice === 'alien' && this.computer.choice === 'paper' ||
      this.userChoice === 'alien' && this.computer.choice === 'ufo'||
      this.userChoice === 'ufo' && this.computer.choice === 'scissors' ||
      this.userChoice === 'ufo' && this.computer.choice === 'rock'
      ){
        this.user.winCount();
        this.isWinning = true;
        this.winner = 'user'
      } else {
        this.computer.winCount();
        this.isWinning = false
        this.winner = 'computer';
      }
      if (this.winner = 'user'){
        return `🎉 You win! 🎉 `
      } else if (this.winner = 'computer'){
        return `You lost! 🥺  Try again.`
      } else if(this.winner = 'tie'){
        return `Great minds think alike! It's a tie 🤪 `
      }
    }
    startGame (gameVersionChosen){
      this.user.emoji = '';
      this.computer.emoji = '';
      this.gameVersionChosen = gameVersionChosen;
    }
    // declareWinner(){
    //
    // }
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
