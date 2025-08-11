let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

const buttons = document.querySelectorAll('.btn');
const resultsContainer = document.querySelector('.results');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function getHumanChoice(buttonChoice) {
    return buttonChoice.target.textContent.toLowerCase();
};

function playRound(humanChoice, computerChoice) {
    const roundResult = document.createElement('p');
    
    if (humanChoice === computerChoice) {
        roundResult.textContent = `The computer chose ${computerChoice}.\nYou tied this round. Your score:${humanScore} Computer score:${computerScore}`;
        // I chose to not increase the game count or score in the event of a 
        // tie since that's how it usually works in rock, paper, scissors.
    } else if (
        (humanChoice ==="rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        gameCount++;
        roundResult.textContent = `The computer chose ${computerChoice}.\nYou won this round! Your score:${humanScore} Computer score:${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        gameCount++;
        roundResult.textContent = `The computer chose ${computerChoice}.\nYou lost this round. Your score:${humanScore} Computer score:${computerScore}`;
    }
    resultsContainer.appendChild(roundResult);
};

function playGame(button) {
    if (gameCount < 5) {
        const humanSelection = getHumanChoice(button);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        };
    if (gameCount >= 5) {
        endGame();
    };
};

// I created a separate function for endgame because I initially used it in two
// places. This might need cleaning up.

function endGame() {
    const endResult = document.createElement('p');
    endResult.style.fontWeight = 'bold';

    if (humanScore > computerScore) {
        endResult.textContent = `\u{1F389}CONGRATS, YOU WON THE GAME!!!\u{1F389} \nYour final score: ${humanScore}. Computer final score: ${computerScore}`;
    } else if (computerScore > humanScore) {
        endResult.textContent = `You lost the game. :( \nYour final score: ${humanScore}. Computer final score: ${computerScore}`;
    } else if (computerScore === humanScore) {
        endResult.textContent = `Somehow it's a tie. \nYour final score: ${humanScore}. Computer final score: ${computerScore}`;
    } else {
        endResult.textContent = "Something went wrong. I'm new to coding so don't blame me!";
    }

    resultsContainer.appendChild(endResult);
};

buttons.forEach(button => {
    button.addEventListener('click', (playGame));
});