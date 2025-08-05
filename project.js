function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
  }
  
const choice = getComputerChoice(3);
let playPC;

if (choice === 0) {
    playPC = "rock";
} else if (choice === 1) {
    playPC = "paper";
} else { 
    playPC = "scissors";
}
console.log(playPC);

function getHumanChoice() {
    return prompt("какой твой выбор ?")
}
console.log(getHumanChoice());


