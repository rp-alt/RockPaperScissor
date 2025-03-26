
let humanScore = 0;
let computerScore = 0; 
function getComputerChoice() {  //Using random number generator to assign rock,paper,scissor to 0,1,2
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
let humanChoice = "";
function getHumanChoice() {
    return humanChoice;
}

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const score = document.getElementById("score");
score.innerHTML = `🧍 Human: ${humanScore} | 🤖 Computer: ${computerScore}`





rockBtn.addEventListener("click", function () {
    humanChoice = "rock";
    const computerChoice = getComputerChoice();
    const log = document.getElementById("log");
    log.innerHTML = `
  You chose: ${getHumanChoice()}<br>
  Computer chose: ${computerChoice}<br>
  
  ${playRound(getHumanChoice(), computerChoice)}
`;
score.innerHTML = `🧍 Human: ${humanScore} | 🤖 Computer: ${computerScore}`;
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore >= 5) {
            log.innerHTML = 'You Win!!!!';
            console.log("You win");
            return;
        }
        else {
            log.innerHTML = 'You Lose!!!!';
            console.log("Computer Wins");
            return;
        }
      }
    




});


paperBtn.addEventListener("click", function () {
    humanChoice = "paper";
    const computerChoice = getComputerChoice();
    const log = document.getElementById("log");
    log.innerHTML = `
    You chose: ${getHumanChoice()}<br>
    Computer chose: ${computerChoice}<br>
    ${playRound(getHumanChoice(), computerChoice)}
  `;
  score.innerHTML = `🧍 Human: ${humanScore} | 🤖 Computer: ${computerScore}`;
    if (humanScore >=  5 || computerScore >=  5) {
        if (humanScore >= 5) {
            log.innerHTML = 'You Win!!!!';
            console.log("You win");
            return;
        }
        else {
            log.innerHTML = 'You Lose!!!!';
            console.log("Computer Wins");
            return;
        }
      }
    if (humanScore >= 5 || computerScore >=  5) {
        score.innerHTML = `🧍 Human: ${humanScore} | 🤖 Computer: ${computerScore}`;
        return; // 🛑 stop the rest of the function here
      }
  


});

scissorBtn.addEventListener("click", function () {
    humanChoice = "scissor";
    const computerChoice = getComputerChoice();
    const log = document.getElementById("log");
    
    log.innerHTML = `
    You chose: ${getHumanChoice()}<br>
    Computer chose: ${computerChoice}<br>
    ${playRound(getHumanChoice(), computerChoice)}
    `;

    score.innerHTML = `🧍 Human: ${humanScore} | 🤖 Computer: ${computerScore}`;
    if (humanScore >=  5 || computerScore >=  5) {
        if (humanScore >= 5) {
            log.innerHTML = 'You Win!!!!';
            console.log("You win");
            return;
        }
        else {
            console.log("Computer Wins");
            log.innerHTML = 'You Lose!!!!';
            return;
        }
      }
    if (humanScore >=  5 || computerScore >=  5) {
        score.innerHTML = `🧍 Human: ${humanScore} | 🤖 Computer: ${computerScore}`;
        return; // 🛑 stop the rest of the function here
      }
   



});
