let humanScore = 0;
let computerScore = 0;

/*
get Computer Choice
select a random number 1-3 to choose rock, paper or scissors
*/

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) +1;
    //chooses a random number from 1-3
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
    let userInput = prompt("Enter rock, paper, or scissors",);
    return userInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("The computer chose rock. It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("The computer chose paper. You lost this round!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("The computer chose scissors. You won this round!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("The computer chose scissors. You lost this round!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("The Computer chose paper. You won this round!"); 
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("The computer also chose scissors. It's a tie!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("The computer chose rock. You won this round!");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("The computer also chose paper. It's a tie!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("The computer chose scissors. You lost this round!");
    } else {
        console.log("Error: Make sure you chose a valid input.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


//when     humanScore + computerScore >= 5   end the game
// when game ends, if human > comp => you win. else, lose






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
/*
keep track of human score and computer score and print it after every
round. Assign the variables 0 to start.

prompt to restart, play again, or quit

5 rounds

*/