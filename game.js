class Game {
  constructor(user, computer){
    this.id = Date.now();
    this.user = new Player ("user", "") ;
    this.computer = new Player ("computer", "");
    this.gameVersionChosen = '';
  }
  checkForWinner(){
    if (this.user.choice === this.computer.choice){
      this.winner = 'tie';
    } else if((this.user.choice === 'rock' && this.computer.choice === 'alien') ||
       (this.user.choice === 'rock' && this.computer.choice === 'scissors') ||
       (this.user.choice === 'paper' && this.computer.choice === 'rock') ||
       (this.user.choice === 'paper' && this.computer.choice === 'ufo') ||
       (this.user.choice === 'scissors' && this.computer.choice === 'paper')||
       (this.user.choice === 'scissors' && this.computer.choice === 'alien') ||
       (this.user.choice === 'alien' && this.computer.choice === 'paper') ||
       (this.user.choice === 'alien' && this.computer.choice === 'ufo') ||
       (this.user.choice === 'ufo' && this.computer.choice === 'scissors') ||
       (this.user.choice === 'ufo' && this.computer.choice === 'rock')){
         this.user.winner = true;
         this.user.winCount();
     } else {
       this.computer.winner = true;
       this.computer.winCount();
       }
     }
     startGame (gameVersionChosen){
       this.user.token = '';
       this.computer.token = '';
      if(this.gameVersionChosen === ''){
       this.gameVersionChosen = gameVersionChosen;
     }
   }
}
