let passcode = Math.floor(Math.random()*1000);
let tries = 10;

/*HUD elements (player output data)*/
let attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left " + tries;

let clueText = document.getElementById("clue");

/*Event listeners (player input controls)*/
let button = document.getElementById("guess-button");
let number = document.getElementById("guess-text");
button.addEventListener("click", guessNumber);

function guessNumber(){
    let guess = number.value;
    tries--;
    if(guess == passcode){
        document.body.innerHTML = "<h1>You win!</h1>" + "<p>Got it in " + (10 - tries) + " tries.</p>";
    }else if(tries <= 0){
        document.body.innerHTML = "<h1>You lose</h1>" + "<p>The number was: " + passcode + "</p>"
    }else{
        attemptsText.innerHTML = "Number of Attempts left: " + tries;
        giveClue(guess);
    }
}

function giveClue(guess){
    if(guess > passcode){
        console.log(guess + " is too HIGH!");
        clueText.innerHTML += "<li>" + guess + " is too HIGH!</li>";
    }else{
        console.log(guess + " is too LOW!");
        clueText.innerHTML += "<li>" + guess + " is too LOW!</li>";
    }
}
