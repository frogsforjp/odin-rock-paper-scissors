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
    } else if (randomNumber === 3) {
        console.log("Go buy a lottery ticket because you just got disgustingly lucky rolling a 1 with Math.random()!")
    }
}

function getHumanChoice () {
    let choice = prompt("Enter rock, paper, or scissors");
    if (choice === "shoe") {
        humanScore += 9000;
        console.log(`You unlocked the secret ending.`)
        endGame();
    } else {
        return choice.toLowerCase();
    }
}

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