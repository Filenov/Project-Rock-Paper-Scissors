function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
  }
  
const choice = getComputerChoice(3);
let computerChoice;

if (choice === 0) {
    computerChoice = "rock";
} else if (choice === 1) {
    computerChoice = "paper";
} else { 
    computerChoice = "scissors";
}

function getHumanChoice() {
    return prompt("Какой твой выбор ?");
}
const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = computerChoice;
console.log(humanSelection, computerSelection);


let computerScore = 0; // сумма выигрышей компьютера
let humanScore = 0;  // сумма выигрышей человека











