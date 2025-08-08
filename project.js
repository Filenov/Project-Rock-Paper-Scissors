function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    
    function getHumanChoice() {
        return prompt("Какой твой выбор? (rock, paper, scissors)");
    }

    for (let round = 0; round < 5; round++) {
        const choice = getComputerChoice(3);
        let computerChoice;

        if (choice === 0) {
            computerChoice = "rock";
        } else if (choice === 1) {
            computerChoice = "paper";
        } else { 
            computerChoice = "scissors";
        }
        
        const humanChoice = getHumanChoice().toLocaleLowerCase();
        const humanSelection = humanChoice; // Возвращаем переменную
        const computerSelection = computerChoice; // Возвращаем переменную

        function playRound(humanSelection, computerSelection) {
            if (humanSelection === computerSelection) {
                console.log("Ничья в этом раунде");
                return;
            }
            if (
                (humanSelection === "rock" && computerSelection === "scissors") ||
                (humanSelection === "scissors" && computerSelection === "paper") ||
                (humanSelection === "paper" && computerSelection === "rock")
            ) {
                humanScore++;
                console.log(`Вы выиграли! ${humanSelection} побеждает ${computerSelection}`);
            } else {
                computerScore++;
                console.log(`Компьютер выиграл! ${computerSelection} побеждает ${humanSelection}`);
            }
        }
        
        playRound(humanSelection, computerSelection);
    }
    
    // Финальные результаты
    console.log("\n=== ИТОГИ ИГРЫ ===");
    console.log(`Ваши очки: ${humanScore}`);
    console.log(`Очки компьютера: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Вы победили в игре!");
    } else if (computerScore > humanScore) {
        console.log("Компьютер победил в игре!");
    } else {
        console.log("Игра закончилась вничью!");
    }
}

playGame();