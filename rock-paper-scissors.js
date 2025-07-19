//I plan to be more mindful of global scope in the future when it comes to variables

let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}

function getHumanChoice () {
    let choice = prompt("Enter rock, paper, or scissors");
    if (choice === "shoe") {
        humanScore += 9000;
        gameCount += 5;
        console.log(`You unlocked the secret ending.`)
        endGame();
    } else {
        return choice.toLowerCase();
    }
}

//I chose to ignore ties affecting the game count and score

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`The computer chose ${computerChoice}.\nYou tied this round. Your score:${humanScore} Computer score:${computerScore}`);
    } else if (
        (humanChoice ==="rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        gameCount++;
        console.log(`The computer chose ${computerChoice}.\nYou won this round! Your score:${humanScore} Computer score:${computerScore}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        gameCount++;
        console.log(`The computer chose ${computerChoice}.\nYou lost this round. Your score:${humanScore} Computer score:${computerScore}`);
    }
}

function playGame() {
    while (gameCount < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    endGame();
}

//I created a endGame() function so I could use it for when the player inputs shoe in getHumanChoice() in addition to it's use inside the playGame() function.

function endGame() {
    if (humanScore > computerScore) {
        console.log(`\u{1F389}CONGRATS, YOU WON THE GAME!!!\u{1F389} \nYour final score: ${humanScore}. Computer final score: ${computerScore}`)
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. :( \nYour final score: ${humanScore}. Computer final score: ${computerScore}`)
    } else if (computerScore === humanScore) {
        console.log(`Somehow it's a tie. \nYour final score: ${humanScore}. Computer final score: ${computerScore}`)
    } else {
        console.log("Something went wrong. I'm new to coding so don't blame me!")
    }
}

playGame();