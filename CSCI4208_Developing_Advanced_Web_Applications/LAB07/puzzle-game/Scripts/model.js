let passcode = Math.floor(Math.random()*1000);
let tries = 10;
let guess = new Guess();
let then = Date.now();
let timeLeft = 30;
let gameOver = false;

function guessNumber(guess){
    tries--;
    if(guess == passcode){
        gameOver = true;
        printGameOver('WIN');
    }else if(timeLeft <= 0 && gameOver == false){
        printGameOver('LOSE');
    }else{
        printAttemptsRemaining();
        giveClue(guess);
    }
}

function giveClue(guess){
    if(guess > passcode){
        printClue('HI', guess);
    }else{
        printClue('LO', guess);
    }
}

function main(){
    let now = Date.now();
    if (timeLeft <= 0 && gameOver == false){
        printGameOver('LOSE');
    }else if(now - then > 1000){
        timeLeft--;
        printDigits();
        printAttemptsRemaining();
        then = Date.now();
    }
    requestAnimationFrame(main);
}

main();