class Game {
  constructor(user, computer){
    this.id = Date.now();
    this.user = new Player ("user", "token") ;
    this.computer = new Player ("computer", "token");
    this.gameVersionChosen = '';
    this.winnerName = '';
    // this.isWinning = true;
    // this.userChoice = '';
    // this.computerChoice = this.computer.playRoundClassic;
  }
  checkForWinner(){
    // newGame.user.takeTurn();
    // newGame.computer.takeTurn();

    if (this.user.choice === this.computer.choice){
      this.winner = 'tie';
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
      this.winner = 'user'
    } else {
      this.computer.winCount();
      this.winner = 'computer';
      }
      console.log(this.computer.choice, 'choiceComp')
      console.log(this.user.choice, 'choiceUser')
      console.log(this.winner, 'weiner')
      console.log(this.user.wins, 'user wins')
      console.log(this.computer.wins, 'computer wins')
    }
    startGame (gameVersionChosen){
      this.user.token = '';
      this.computer.token = '';
      this.gameVersionChosen = gameVersionChosen;
    }
  }
