let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

/*
get Computer Choice
select a random number 1-3 to choose rock, paper or scissors
*/

function getComputerChoice() {
    //Math.random = random value from 0-1 multiplied by 3
    //Math.floor rounds it down to nearest whole number (0-2)
    //then I add 1 so it's 1-3 (I probably could just code it 0-2 instead though)
    randomNumber = Math.floor(Math.random() * 3) +1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissors";
    }
}

/*
get Human Choice
prompt the user for a choice between rock, paper or scissors
(for this assignment assume the user always puts in a valid input)
(also make the parameters case-insensitive)
*/

function getHumanChoice () {
    let userInput = prompt("Enter rock, paper, or scissors");
    return userInput.toLowerCase();
}

function playGame() {
    while (gameCount < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === "rock" && computerChoice === "rock") {
                console.log(`The computer chose rock.
        It's a tie! Your score is ${humanScore} and the computer's score is ${computerScore}.`);
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                computerScore++;
                gameCount++;
                console.log(`The computer chose paper.
        You lost this round! Your score is ${humanScore} and the computer's score is ${computerScore}.`);
            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore++;
                gameCount++;
                console.log(`The computer chose scissors.
        You won this round! Your score is ${humanScore} and the computer's score is ${computerScore}.`);
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScore++;
                gameCount++;
                console.log(`The computer chose scissors.
        You lost this round! Your score is ${humanScore} and the computer's score is ${computerScore}.`);
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore++;
                gameCount++;
                console.log(`The Computer chose paper.
        You won this round! Your score is ${humanScore} and the computer's score is ${computerScore}.`); 
            } else if (humanChoice === "scissors" && computerChoice === "scissors") {
                console.log(`The computer also chose scissors.
        It's a tie! Your score is ${humanScore} and the computer's score is ${computerScore}.`);
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                humanScore++;
                gameCount++;
                console.log(`The computer chose rock.
        You won this round! Your score is ${humanScore} and the computer's score is ${computerScore}.`);
            } else if (humanChoice === "paper" && computerChoice === "paper") {
                console.log(`The computer also chose paper.
        It's a tie! Your score is ${humanScore} and the computer's score is ${computerScore}.`);
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScore++;
                gameCount++;
                console.log(`The computer chose scissors.
        You lost this round! Your score is ${humanScore} and the computer's score is ${computerScore}.`);
            }
        }
    }
}

function endGame() {
    if (humanScore > computerScore) {
    console.log(`Congrats, you won the game!!! Your final score: ${humanScore}. Computer final score: ${computerScore}`)
    } else if (computerScore > humanScore) {
    console.log(`You lost the game. Better luck next time. Your final score: ${humanScore}. Computer final score: ${computerScore}`)
    } else if (computerScore === humanScore) {
        console.log(`Somehow it's a tie. Your final score: ${humanScore}. Computer final score: ${computerScore}`)
    }
}


alert("To play the game, open the developer console with F12.")
playGame();
endGame();

/*

check who won

    function for player choosing rock
        if computer chose rock, tie
        if computer chose paper, lose. +1 computer score
        if computer chose scissors, win. +1 human score

    function for player choosing paper
        if computer chose rock, win. +1 human score
        if computer chose paper, tie
        if computer chose scissors, lose. +1 computer score

    function for player choosing scissors
        if computer chose rock, lose. +1 computer score
        if computer chose paper, win. +1 human score
        if computer chose scissors, tie

*/