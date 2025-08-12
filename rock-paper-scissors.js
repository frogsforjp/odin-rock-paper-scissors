let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

const buttons = document.querySelectorAll('.btn');
const roundResult = document.querySelector('.round-result');

function updateScore() {
    const humanScoreCount = document.querySelector('.human-score');
    humanScoreCount.textContent = `${humanScore}`;

    const computerScoreCount = document.querySelector('.computer-score');
    computerScoreCount.textContent = `${computerScore}`;
};

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function getHumanChoice(buttonChoice) {
    return buttonChoice.target.textContent.toLowerCase();
};

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        roundResult.textContent = `You tied the round.`;
        // I chose to not increase the game count or score in the event of a
        // tie since that's how it usually works in rock, paper, scissors.
    } else if (
        (humanChoice ==="rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        gameCount++;
        roundResult.textContent = `You won the round!`;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        gameCount++;
        roundResult.textContent = `You lost the round.`;
    }
    updateScore();
};

function playGame(button) {
    if (gameCount < 5) {
        const humanChoice = getHumanChoice(button);
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        };
    if (gameCount >= 5) {
        endGame();
    };
};

function endGame() {
    const roundResult = document.querySelector('.round-result');

    if (humanScore > computerScore) {
        roundResult.textContent = `\u{1F389}CONGRATS, YOU WON THE GAME!!!\u{1F389}`;
    } else if (computerScore > humanScore) {
        roundResult.textContent = `You lost the game. better luck next time. :(`;
    } else if (computerScore === humanScore) {
        roundResult.textContent = `Somehow it's a tie.`;
    } else {
        roundResult.textContent = "Something went wrong. I'm new to coding so don't blame me!";
    }
    createReplayButton();
};

function createReplayButton() {
    let replayMessages = [
        'Care for another game?',
        'Another round perhaps?',
        'Surely another game?',
        'Quitting so soon?',
        'I know you want another game',
        'Shall we go again?',
        'Leaving so soon? :('
    ];
    const randomIndex = Math.floor(Math.random() * replayMessages.length);
    
    const replayClass = document.querySelector('.replay');
    // I added this conditional so that I couldn't spam create new buttons
    // and I had to move the replayClass outside of it for the code to work
    if (!replayClass.querySelector('button')) {
        const replayButton = document.createElement('button');
        replayButton.textContent = replayMessages[randomIndex];
        replayClass.append(replayButton);
        replayButton.addEventListener('click', replayGame);
    }
};

function replayGame() {
    humanScore = 0;
    computerScore = 0;
    gameCount = 0;
    updateScore();
    roundResult.textContent = "Choose your weapon!";
    const replayClass = document.querySelector('.replay');
    replayClass.textContent = '';
};

buttons.forEach(button => {
    button.addEventListener('click', (playGame));
});