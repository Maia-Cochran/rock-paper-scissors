class Game {
  constructor(user, computer){
    this.id = Date.now();
    this.user = new Player ("user", "token") ;
    this.computer = new Player ("computer", "token");
    this.gameVersionChosen = '';
    this.winnerName = '';
    this.isWinning = true;
    this.userChoice = '';
    // this.userChoice = '';
    // this.computerChoice = this.computer.playRoundClassic;
  }
  checkForWinner(){
      this.user.choice = 'scissors'
      this.computer.choice = this.computer.playRoundSpicy();
    console.log(this.computer.choice)
    console.log(this.user.choice)
    // this.computer.playRoundSpicy();
    if (this.user.choice === this.computer.choice){
      return this.winner = 'tie';
    }
    if((this.user.choice === 'rock' && this.computer.choice === 'alien') ||
      (this.user.choice === 'rock' && this.computer.choice === 'scissors') ||
      (this.user.choice === 'paper' && this.computer.choice === 'rock') ||
      (this.user.choice === 'paper' && this.computer.choice === 'ufo') ||
      (this.user.choice === 'scissors' && this.computer.choice === 'paper')||
      (this.user.choice === 'scissors' && this.computer.choice === 'alien') ||
      (this.user.choice === 'alien' && this.computer.choice === 'paper') ||
      (this.user.choice === 'alien' && this.computer.choice === 'ufo') ||
      (this.user.choice === 'ufo' && this.computer.choice === 'scissors') ||
      (this.user.choice === 'ufo' && this.computer.choice === 'rock'
    )){
      this.user.winCount();
      console.log(this.user.wins)
      // this.isWinning = true;
      return this.winner = 'user'
    } else {
      this.computer.winCount();
      console.log(this.computer.wins)
      // this.isWinning = false
      return this.winner = 'computer';
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
