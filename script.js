

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);


    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }

    else {
        return "scissor";
    }
}

function getHumanChoice() {
    const input = prompt("Rock, Paper or Scissor");
    const userInput = input.toLowerCase();

    if (userInput == "rock" || userInput == "paper" || userInput == "scissor") {
        return userInput;
    } else {
        alert("Invalid input. Please choose Rock, Paper, or Scissor.");
        return getHumanChoice(); // Ask again if invalid input
    }

}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        return "It is a draw";
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        return ("You lose!, Paper beats Rock!!");
    }
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        return ("You lose!, Scissor beats Paper!!");
    }
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        return ("You lose!, Rock beats Scissors!!");
    }
    else if (humanChoice == "rock" && computerChoice == "scissor") {
        return ("You Win!, Rock beats Scissors!!");
    }
    else if (humanChoice == "scissor" && computerChoice == "paper") {
        return ("You Win!, Scissors beats Paper!!");
    }
    else {
        return ("You win!, Paper beats Rock");
    }
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("You chose:", humanSelection);
console.log("Computer chose:", computerSelection);
console.log(playRound(humanSelection, computerSelection));
