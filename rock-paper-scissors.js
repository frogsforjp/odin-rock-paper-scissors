let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function getHumanChoice(button) {
    return button.target.textContent.toLowerCase();
};

function playRound(humanChoice, computerChoice) {
    const newResult = document.createElement('p');

    if (humanChoice === computerChoice) {
        newResult.textContent = `The computer chose ${computerChoice}.\nYou tied this round. Your score:${humanScore} Computer score:${computerScore}`;
        // I chose to not increase the game count or score in the event of a 
        // tie since that's how it usually works in rock, paper, scissors.
    } else if (
        (humanChoice ==="rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        gameCount++;
        newResult.textContent = `The computer chose ${computerChoice}.\nYou won this round! Your score:${humanScore} Computer score:${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        gameCount++;
        newResult.textContent = `The computer chose ${computerChoice}.\nYou lost this round. Your score:${humanScore} Computer score:${computerScore}`;
    }
    results.appendChild(newResult);
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
    const newResult = document.createElement('p');

    if (humanScore > computerScore) {
        newResult.textContent = `\u{1F389}CONGRATS, YOU WON THE GAME!!!\u{1F389} \nYour final score: ${humanScore}. Computer final score: ${computerScore}`;
    } else if (computerScore > humanScore) {
        newResult.textContent = `You lost the game. :( \nYour final score: ${humanScore}. Computer final score: ${computerScore}`;
    } else if (computerScore === humanScore) {
        newResult.textContent = `Somehow it's a tie. \nYour final score: ${humanScore}. Computer final score: ${computerScore}`;
    } else {
        newResult.textContent = "Something went wrong. I'm new to coding so don't blame me!";
    }

    results.appendChild(newResult);
}

const buttons = document.querySelectorAll('.btn');
const results = document.querySelector('.results');

buttons.forEach(button => {
    button.addEventListener('click', (playGame));
});