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

    if (playerSelection == "rock" && computerSelection == "rock") {
        computerMoveResult.textContent = "rock"
        playerMoveResult.textContent = "rock"
        winnerResult.textContent = "Tie!"
        computerTally++;
        playerTally++; 
        playerTotal.textContent = `${playerTally}`
        computerTotal.textContent = `${computerTally}`
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerMoveResult.textContent = "paper"
        playerMoveResult.textContent = "rock"
        winnerResult.textContent = "You Lose! Paper beats Rock"
        computerTally++;
        computerTotal.textContent = `${computerTally}`
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        computerMoveResult.textContent = "scissors"
        playerMoveResult.textContent = "rock"
        winnerResult.textContent = "You Win! Rock beats Scissors"
        playerTally++; 
        playerTotal.textContent = `${playerTally}`
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        computerMoveResult.textContent = "rock"
        playerMoveResult.textContent = "paper"
        winnerResult.textContent = "You Win! Paper beats Rock"
        playerTally++; 
        playerTotal.textContent = `${playerTally}`
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        computerMoveResult.textContent = "paper"
        playerMoveResult.textContent = "paper"
        winnerResult.textContent = "Tie!"
        computerTally++;
        playerTally++;
        playerTotal.textContent = `${playerTally}`
        computerTotal.textContent = `${computerTally}`
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerMoveResult.textContent = "scissors"
        playerMoveResult.textContent = "paper"
        winnerResult.textContent = "You Lose! Scissors beats Paper"
        computerTally++;
        computerTotal.textContent = `${computerTally}` 
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerMoveResult.textContent = "rock"
        playerMoveResult.textContent = "scissors"
        winnerResult.textContent = "You Lose! Rock beats Scissors"
        computerTally++; 
        computerTotal.textContent = `${computerTally}`
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        computerMoveResult.textContent = "paper"
        playerMoveResult.textContent = "scissors"
        winnerResult.textContent = "You Win! Scissors beats Paper"
        playerTally++; 
        playerTotal.textContent = `${playerTally}`
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        computerMoveResult.textContent = "scissors"
        playerMoveResult.textContent = "scissors"
        winnerResult.textContent = "Tie!"
        computerTally++;
        playerTally++;
        playerTotal.textContent = `${playerTally}`
        computerTotal.textContent = `${computerTally}` 
    }

    if (computerTally >= 5 && playerTally >= 5) alert ("Tie");
    else if (computerTally >= 5) alert ("Computer wins");
    else if (playerTally >= 5) alert ("Player wins");
}

let computerTally = 0;
let playerTally = 0; 

const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

buttonRock.addEventListener('click', function () {
    playRound("rock");
});
buttonPaper.addEventListener('click', function () {
    playRound("paper");
});
buttonScissors.addEventListener('click', function () {
    playRound("scissors");
});

//create three buttons 
const content = document.createElement('content')
content.appendChild(buttonRock);
content.appendChild(buttonPaper);
content.appendChild(buttonScissors);

//grab the body element and append our content div to it 
const body = document.querySelector('body');
body.appendChild(content);

//create text elements to display results on our page 
const computerMove = document.createElement('p');
computerMove.textContent = "Computer move: ";
const computerMoveResult = document.createElement('p');
computerMoveResult.textContent = "0"

const playerMove = document.createElement('p');
playerMove.textContent = "Player move:";
const playerMoveResult = document.createElement('p');
playerMoveResult.textContent = "0";

const winner = document.createElement('p');
winner.textContent = "Round Winner: ";
const winnerResult = document.createElement('p');
winnerResult.textContent = "0";

const computerTotal = document.createElement('p');
computerTotal.textContent = "Computer Total: "; 
const playerTotal = document.createElement('p');
playerTotal.textContent = "Player Total: "; 
const roundWinner = document.createElement('p');
roundWinner.textContent = "";

content.appendChild(computerMove);
content.appendChild(computerMoveResult);
content.appendChild(playerMove);
content.appendChild(playerMoveResult);
content.appendChild(winner);
content.appendChild(winnerResult);
content.appendChild(computerTotal);
content.appendChild(playerTotal);
content.appendChild(roundWinner);