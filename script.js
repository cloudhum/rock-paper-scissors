/*
    TODO: create helper function to be called in playRound that cuts down on code repetition
 */

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
    computerMoveResult.style.backgroundColor = "rgba(247, 245, 245, 0.886)"
    playerMoveResult.style.backgroundColor = "rgba(247, 245, 245, 0.886)"
    console.log(computerSelection);

    if (playerSelection == "rock" && computerSelection == "rock") {
        computerMoveResult.textContent = "rock"
        playerMoveResult.textContent = "rock"
        winnerResult.textContent = "Tie!"
        computerTally++;
        playerTally++;
        computerMoveResult.style.backgroundColor = "palegreen"
        playerMoveResult.style.backgroundColor = "palegreen"
        playerTotal.textContent = `${playerTally}`
        computerTotal.textContent = `${computerTally}`
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerMoveResult.textContent = "paper"
        playerMoveResult.textContent = "rock"
        computerMoveResult.style.backgroundColor = "palegreen"
        winnerResult.textContent = "You Lose! Paper beats Rock"
        computerTally++;
        computerTotal.textContent = `${computerTally}`
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        computerMoveResult.textContent = "scissors"
        playerMoveResult.textContent = "rock"
        playerMoveResult.style.backgroundColor = "palegreen"
        winnerResult.textContent = "You Win! Rock beats Scissors"
        playerTally++;
        playerTotal.textContent = `${playerTally}`
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        computerMoveResult.textContent = "rock"
        playerMoveResult.textContent = "paper"
        playerMoveResult.style.backgroundColor = "palegreen"
        winnerResult.textContent = "You Win! Paper beats Rock"
        playerTally++;
        playerTotal.textContent = `${playerTally}`
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        computerMoveResult.textContent = "paper"
        playerMoveResult.textContent = "paper"
        computerMoveResult.style.backgroundColor = "palegreen"
        playerMoveResult.style.backgroundColor = "palegreen"
        winnerResult.textContent = "Tie!"
        computerTally++;
        playerTally++;
        playerTotal.textContent = `${playerTally}`
        computerTotal.textContent = `${computerTally}`
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerMoveResult.textContent = "scissors"
        playerMoveResult.textContent = "paper"
        computerMoveResult.style.backgroundColor = "palegreen"
        winnerResult.textContent = "You Lose! Scissors beats Paper"
        computerTally++;
        computerTotal.textContent = `${computerTally}`
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerMoveResult.textContent = "rock"
        playerMoveResult.textContent = "scissors"
        computerMoveResult.style.backgroundColor = "palegreen"
        winnerResult.textContent = "You Lose! Rock beats Scissors"
        computerTally++;
        computerTotal.textContent = `${computerTally}`
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        computerMoveResult.textContent = "paper"
        playerMoveResult.textContent = "scissors"
        playerMoveResult.style.backgroundColor = "palegreen"
        winnerResult.textContent = "You Win! Scissors beats Paper"
        playerTally++;
        playerTotal.textContent = `${playerTally}`
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        computerMoveResult.textContent = "scissors"
        playerMoveResult.textContent = "scissors"
        computerMoveResult.style.backgroundColor = "palegreen"
        playerMoveResult.style.backgroundColor = "palegreen"
        winnerResult.textContent = "Tie!"
        computerTally++;
        playerTally++;
        playerTotal.textContent = `${playerTally}`
        computerTotal.textContent = `${computerTally}`
    }

    if (computerTally >= 5 && playerTally >= 5) {
        alert("Tie");
        resetGame();
    }
    else if (computerTally >= 5) {
        alert("Computer wins");
        resetGame();
    }
    else if (playerTally >= 5) {
        alert("Player wins");
        resetGame();
    }
}

function resetGame() {
    playerTally = 0;
    computerTally = 0;
    computerMoveResult.textContent = ""
    playerMoveResult.textContent = ""
    computerMoveResult.style.backgroundColor = "rgba(247, 245, 245, 0.886)"
    playerMoveResult.style.backgroundColor = "rgba(247, 245, 245, 0.886)"
    winnerResult.textContent = "First to 5 points wins!"
    playerTotal.textContent = `${playerTally}`
    computerTotal.textContent = `${computerTally}`
}

let computerTally = 0;
let playerTally = 0;

buttonRock.addEventListener('click', function () {
    playRound("rock");
});
buttonPaper.addEventListener('click', function () {
    playRound("paper");
});
buttonScissors.addEventListener('click', function () {
    playRound("scissors");
});

