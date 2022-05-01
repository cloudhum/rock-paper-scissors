
function computerPlay() {
    //randomly return either 'Rock', 'Paper' or "Scissors" for the computer's move
    const ROCK = 1;
    const PAPER = 2;
    const SCISSORS = 3;
    
    //select a random number between 1-3 inclusive
    let computerMove = Math.floor(Math.random() * 3 + 1);
    
    if (computerMove == ROCK) return "rock";
    if (computerMove == PAPER) return "paper";
    if (computerMove == SCISSORS) return "scissors";
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    console.log("Computer move: " + computerSelection); 
    
    if (playerSelection == "rock" && computerSelection == "rock") console.log("Tie!");
    else if (playerSelection == "rock" && computerSelection == "paper") console.log("You Lose! Paper beats Rock");
    else if (playerSelection == "rock" && computerSelection == "scissors") console.log("You Win! Rock beats Scissors");
    
    else if (playerSelection == "paper" && computerSelection == "rock") console.log("You Win! Paper beats Rock");
    else if (playerSelection == "paper" && computerSelection == "paper") console.log("Tie!");
    else if (playerSelection == "paper" && computerSelection == "scissors") console.log("You Lose! Scissors beats Paper");
    
    else if (playerSelection == "scissors" && computerSelection == "rock") console.log("You Lose! Rock beats Scissors");
    else if (playerSelection == "scissors" && computerSelection == "paper") console.log("You Win! Scissors beats Paper");
    else if (playerSelection == "scissors" && computerSelection == "scissors") console.log("Tie!");
}

const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

buttonRock.addEventListener('click', function() {
    playRound("rock");
});
buttonPaper.addEventListener('click', function() {
    playRound("paper");
});
buttonScissors.addEventListener('click', function() {
    playRound("scissors");
});

const content = document.querySelector('.content');
content.appendChild(buttonRock);
content.appendChild(buttonPaper);
content.appendChild(buttonScissors);

const body = document.querySelector('body');
body.appendChild(content);

