
document.addEventListener('DOMContentLoaded', () => {
    // Элементы DOM
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const resetBtn = document.getElementById('reset-btn');
    const humanScoreElement = document.getElementById('human-score');
    const computerScoreElement = document.getElementById('computer-score');
    const roundResultElement = document.getElementById('round-result');
    const finalResultElement = document.getElementById('final-result');
    const humanChoiceElement = document.getElementById('human-choice');
    const computerChoiceElement = document.getElementById('computer-choice');
    
    // Переменные игры
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;
    
    // Функция получения случайного выбора компьютера
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }
    
    // Функция определения победителя раунда
    function playRound(humanSelection, computerSelection) {
        // Отображаем выбор игроков
        humanChoiceElement.textContent = translateChoice(humanSelection);
        computerChoiceElement.textContent = translateChoice(computerSelection);
        
        // Ничья
        if (humanSelection === computerSelection) {
            return `Ничья! Оба выбрали ${translateChoice(humanSelection)}`;
        }
        
        // Проверяем условия победы человека
        if (
            (humanSelection === 'rock' && computerSelection === 'scissors') ||
            (humanSelection === 'scissors' && computerSelection === 'paper') ||
            (humanSelection === 'paper' && computerSelection === 'rock')
        ) {
            humanScore++;
            humanScoreElement.textContent = humanScore;
            return `Вы выиграли! ${translateChoice(humanSelection)} побеждает ${translateChoice(computerSelection)}`;
        } else {
            // Компьютер выигрывает
            computerScore++;
            computerScoreElement.textContent = computerScore;
            return `Компьютер выиграл! ${translateChoice(computerSelection)} побеждает ${translateChoice(humanSelection)}`;
        }
    }
    
    // Функция перевода выбора на русский
    function translateChoice(choice) {
        const choices = {
            'rock': 'Камень',
            'paper': 'Бумага',
            'scissors': 'Ножницы'
        };
        return choices[choice];
    }
    
    // Функция проверки окончания игры
    function checkGameOver() {
        if (humanScore === 5 || computerScore === 5) {
            gameOver = true;
            
            if (humanScore > computerScore) {
                finalResultElement.textContent = 'Поздравляем! Вы выиграли игру!';
            } else {
                finalResultElement.textContent = 'Компьютер выиграл игру!';
            }
            
            // Делаем кнопки неактивными
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            
            return true;
        }
        return false;
    }
    
    // Функция обработки выбора игрока
    function handleHumanChoice(choice) {
        if (gameOver) return;
        
        const computerSelection = getComputerChoice();
        const result = playRound(choice, computerSelection);
        roundResultElement.textContent = result;
        
        checkGameOver();
    }
    
    // Функция сброса игры
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        gameOver = false;
        
        humanScoreElement.textContent = '0';
        computerScoreElement.textContent = '0';
        roundResultElement.textContent = 'Сделайте свой выбор!';
        finalResultElement.textContent = '';
        humanChoiceElement.textContent = '-';
        computerChoiceElement.textContent = '-';
        
        // Включаем кнопки
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    }
    
    // Назначаем обработчики событий на кнопки
    rockBtn.addEventListener('click', () => handleHumanChoice('rock'));
    paperBtn.addEventListener('click', () => handleHumanChoice('paper'));
    scissorsBtn.addEventListener('click', () => handleHumanChoice('scissors'));
    resetBtn.addEventListener('click', resetGame);
});
