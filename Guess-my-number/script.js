'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (response) {
    document.querySelector('.message').textContent = response;
}

document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);

    // WHEN THERE IS NO NUMBER KEYED IN
    if(!guess){
        displayMessage('NO NUMBER!!!');
    }

    // WHEN ONE WINS
    else if(guess === secretNumber){
        displayMessage('CORRECT NUMBER!!!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '20rem';
        document.querySelector('.number').style.fontSize = '8rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // WHEN GUESS IS WRONG
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'NUMBER TOO HIGH!': 'NUMBER TOO LOW!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('YOU LOST THE GAME!!');
            score = 0;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#FF0000';
        }
    }
    
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('START GUESSING ...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = "";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
