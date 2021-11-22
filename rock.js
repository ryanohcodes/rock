

let choice="";

let selection = ["rock", "paper", "scissors"];


function computerPlay () {
randomSelection = Math.floor(Math.random() * selection.length)
choice = selection[randomSelection];
return choice;
}

computerPlay();
console.log(choice);
let message ='';
let playerSelection = prompt("Enter rock, paper, or scissors.")
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

function playTime(playerSelection, choice) {
    if (playerSelection == 'rock' && choice == 'rock') {
        message = "Tie game!";
        alert(message);
        return message;
    } else if (playerSelection == 'rock' && choice == 'paper') {
        message = "You lose!"
        alert(message);
        return message;
    } else if (playerSelection == 'rock' && choice == 'scissors') {
        message = "You win!";
        alert(message);
        return message;
    }
    if (playerSelection == 'paper' && choice == 'rock') {
        message = "You win!";
        alert(message);
        return message;
    } else if (playerSelection == 'paper' && choice == 'paper') {
        message = "Tie Game!"
        alert(message);
        return message;
    } else if (playerSelection == 'paper' && choice == 'scissors') {
        message = "You lose!";
        alert(message);
        return message;
    }
    if (playerSelection == 'scissors' && choice == 'rock') {
        message = "You lose!";
        alert(message);
        return message;
    } else if (playerSelection == 'scissors' && choice == 'paper') {
        message = "You win!"
        alert(message);
        return message;
    } else if (playerSelection == 'scissors' && choice == 'scissors') {
        message = "Tie Game!";
        alert(message);
        return message;
    }
}

let score = 0;
let compScore =0;

for (let i = 0; i < 5; i++) {
    playTime(playerSelection, choice);
    if (message == "You win!"){
        score++;
    } else if (message == "You lose!") {
        compScore++;
    }
    computerPlay();
    if (i < 4){
        playerSelection = prompt("Enter rock, paper, or scissors.")
    }
}
let victory = '';
if (score > compScore) {
    victory = "You are the winner!!!";
}
if (compScore > score) {
    victory = "You are the loser!!!";
}
if (compScore == score) {
    victory = "No one wins!!!";
}


alert(victory);