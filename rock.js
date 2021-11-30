

let choice="";
let selection = ["rock", "paper", "scissors"];


function computerPlay () {
randomSelection = Math.floor(Math.random() * selection.length)
choice = selection[randomSelection];
return choice;
}

function keeper (score, compScore){
    if (score == 5 || compScore == 5){
        if (score > compScore) {
            hSix.textContent = "You are the winner!!!";
            divTwo.appendChild(hSix);
        } else if (compScore > score) {
            hSix.textContent = "You are the loser!!!";
            divTwo.appendChild(hSix);
        } else if (compScore == score) {
            hSix.textContent = "No one wins!!!";
            divTwo.appendChild(hSix);
        }
    }
}

function verbage (message){
    if (message == 'You lose!'){
        div.textContent = 'You lose!';
        box.appendChild(div);
        compScore++;
        divTwo.textContent = `The computer's score is ${compScore}. \n Your score is ${score}.`;
        gameScore.appendChild(divTwo);
    } else if (message == 'You win!'){
        div.textContent = 'You win!';
        box.appendChild(div);
        gameScore.appendChild(div);
        score++;
        divTwo.textContent = `The computer's score is ${compScore}. \n Your score is ${score}.`;
        gameScore.appendChild(divTwo);
    } else if (message == 'Tie Game!'){
        div.textContent = 'Tie Game!';
        box.appendChild(div);
        divTwo.textContent = `The computer's score is ${compScore}. \n Your score is ${score}.`;
        gameScore.appendChild(divTwo);
    }
}

function playRound(playerSelection, choice) {
    if (playerSelection == 'rock' && choice == 'rock') {
        message = "Tie Game!";
        return message;
    } else if (playerSelection == 'rock' && choice == 'paper') {
        message = "You lose!";
        return message;
    } else if (playerSelection == 'rock' && choice == 'scissors') {
        message = "You win!";
        return message;
    }
    if (playerSelection == 'paper' && choice == 'rock') {
        message = "You win!";
        return message;
    } else if (playerSelection == 'paper' && choice == 'paper') {
        message = "Tie Game!";
        return message;
    } else if (playerSelection == 'paper' && choice == 'scissors') {
        message = "You lose!";
        return message;
    }
    if (playerSelection == 'scissors' && choice == 'rock') {
        message = "You lose!";
        return message;
    } else if (playerSelection == 'scissors' && choice == 'paper') {
        message = "You win!";
        return message;
    } else if (playerSelection == 'scissors' && choice == 'scissors') {
        message = "Tie Game!";
        return message;
    }
}

let score = 0;
let compScore = 0;
computerPlay();
console.log(choice);


let message ='';
let playerSelection = ''
let num = '';

const div = document.createElement('div');
const divTwo = document.createElement('div');
const hSix = document.createElement('h1');

divTwo.classList.add('final');

const box = document.querySelector('.box');
const gameScore = document.querySelector('.gameScore');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', (playerSelection) =>{
    playerSelection = 'rock';
    playRound(playerSelection, choice);
    computerPlay();
    verbage(message);
    keeper (score, compScore);
});

paper.addEventListener('click', (playerSelection) =>{
    playerSelection = 'paper';
    playRound(playerSelection, choice);
    computerPlay();
    verbage(message);
    keeper (score, compScore);
});

scissors.addEventListener('click', (playerSelection) =>{
    playerSelection = 'scissors';
    playRound(playerSelection, choice);
    computerPlay();
    verbage(message);
    keeper (score, compScore);
});

