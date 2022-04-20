function computerPlay() {
//randomly return either 'Rock', 'Paper' or "Scissors" for the computer's move
    const ROCK = 1;
    const PAPER = 2;
    const SCISSORS = 3; 

    //select a random number between 1-3 inclusive
    let computerMove = Math.floor(Math.random() * 3 + 1); 
    console.log(computerMove);
    
    if (computerMove == ROCK) return "rock";
    if (computerMove == PAPER) return "paper";
    if (computerMove == SCISSORS) return "scissors";
}

function playRound (playerSelection, computerSelection){
playerSelection = playerSelection.toLowerCase(); 
console.log(playerSelection);

if (playerSelection == "rock" && computerSelection == "rock") alert("Tie!");
if (playerSelection == "rock" && computerSelection == "paper") alert("You Lose! Paper beats Rock");
if (playerSelection == "rock" && computerSelection == "scissors") alert( "You Win! Rock beats Scissors");

if (playerSelection == "paper" && computerSelection == "rock") alert("You Win! Paper beats Rock");
if (playerSelection == "paper" && computerSelection == "paper") alert("Tie!");
if (playerSelection == "paper" && computerSelection == "scissors") alert("You Lose! Scissors beats Paper");

if (playerSelection == "scissors" && computerSelection == "rock") alert("You Lose! Rock beats Scissors");
if (playerSelection == "scissors" && computerSelection == "paper") alert("You Win! Scissors beats Paper");
if (playerSelection == "scissors" && computerSelection == "scissors") alert("Tie!");
}

function game(){
// calls playRound to play a 5 around game that keeps score and reports a winner or loser at the end
   for (let i = 0; i < 5; i++){
       playerSelection = prompt("Enter rock, paper, scissors");
       playRound(playerSelection, computerPlay());
   }
}

game();

