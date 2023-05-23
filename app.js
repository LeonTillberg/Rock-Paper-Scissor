const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
let possibleChoices = document.querySelectorAll('.button');
let userChoice;
let result;
let amountWon = 0;
let amountLost = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = '';
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    if(randomNumber === 2){
        computerChoice = 'paper';
    }
    if(randomNumber === 3){
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice){
        result = 'Its a draw!';
    }

    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'Its a win!';
        amountWon++;
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'Its a loss!';
        amountLost++;
    }

    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'Its a win!';
        amountWon++;
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'Its a loss!';
        amountLost++;
    }

    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'Its a win!';
        amountWon++;
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'Its a loss!';
        amountLost++;
    }
    resultDisplay.innerHTML = result;
    scoreDisplay.innerHTML = `${amountWon} wins vs ${amountLost} losses`;
}

const restart = document.getElementById('restartBtn');
restart.addEventListener('click', () =>{
    computerChoiceDisplay.innerHTML = '';
    userChoiceDisplay.innerHTML = '';
    resultDisplay.innerHTML = '';
    scoreDisplay.innerHTML = '';
    amountWon = 0;
    amountLost = 0;
});
