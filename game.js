class Game {
  constructor(user, computer){
    this.id = Date.now();
    this.user = new Player ("user", 🤠 ) ;
    this.computer = new Player ("computer", 💻 );
    this.gameVersionChosen = 'classic' || 'spicy';
    this.userBuddyChoices = ['rock', 'paper', 'scissors'];
    this.computerBuddyChoices = ['rock', 'paper', 'scissors', 'alien', 'ufo'];
    this.winner = true;
  }
  checkForWinner(userChoice, gameVersion){

  }
}


//needs game choice, player choice
//two instances of player
//one instance to hold the user choice
//one for computer choice
//different for each round played
//needs to determine the game type first

//should have variables for choices selected
//will randomize the arrays given from player class
