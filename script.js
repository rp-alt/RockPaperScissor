

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
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("You chose:", humanSelection);
        console.log("Computer chose:", computerSelection);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`"User": ${humanScore}, "Computer": ${computerScore}`);
        


        function playRound(humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase();
            computerChoice = computerChoice.toLowerCase();

            if (humanChoice == computerChoice) {
                return "It is a draw";
            }
            else if (humanChoice == "rock" && computerChoice == "paper") {
                computerScore++;
                return ("You lose!, Paper beats Rock!!");


            }
            else if (humanChoice == "paper" && computerChoice == "scissor") {
                computerScore++;
                return ("You lose!, Scissor beats Paper!!");

            }
            else if (humanChoice == "scissor" && computerChoice == "rock") {
                computerScore++;
                return ("You lose!, Rock beats scissors");

            }
            else if (humanChoice == "rock" && computerChoice == "scissor") {
                humanScore++;
                return ("You Win!, Rock beats Scissors!!");

            }
            else if (humanChoice == "scissor" && computerChoice == "paper") {
                humanScore++;
                return ("You Win!, Scissors beats Paper!!");

            }
            else {
                humanScore++;
                return ("You win!, Paper beats Rock");

            }
        }
    }


    if (humanScore === 5) {
        console.log("🏆 You win the game!");
    } else {
        console.log("💻 Computer wins the game!");
    }

}
       
       

playGame();