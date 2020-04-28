function printAttemptsRemaining(){
    let attemptsText = document.getElementById("attempts");
    attemptsText.innerHTML = `Time left: ${timeLeft}`;
}

function printClue(status, guess){
    let [digit100,digit10,digit1] = status == 'HI' ? ['H', 'I', '-'] : ['L', 'O', '-'];
    document.getElementById("digit-100s").src = `./images/${digit100}.png`;
    document.getElementById("digit-10s").src = `./images/${digit10}.png`;
    document.getElementById("digit-1s").src = `./images/${digit1}.png`;
    then = Date.now();
}

function printGameOver(status){
    if(status === 'WIN'){
        var message = `<h1>YOU WIN</h1> <p>You got it in ${30 - timeLeft} seconds</p>`;
    }else{
        var message = `<h1>YOU LOSE</h1> <p>The number was ${passcode}</p>`;
    }
    document.body.innerHTML = message;
}

function printDigits(){
    document.getElementById("digit-100s").src = `./images/${guess.hundreds}.png`;
    document.getElementById("digit-10s").src = `./images/${guess.tens}.png`;
    document.getElementById("digit-1s").src = `./images/${guess.ones}.png`;
} 

function refresh(){
    let now = Date.now();
    if(now - then > 1000){
        printAttemptsRemaining();
        printDigits();
    }

    requestAnimationFrame(refresh);
}