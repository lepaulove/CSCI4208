let passcode = Math.floor(Math.random()*1000);
let tries = 10;
let guess = 0;


while(tries > 0 && guess != passcode){
    console.log("You have " + tries + " guesses left.");
    let guess = prompt("Guess a number from 1 - 1000:");
    tries--;
    
    if(guess == passcode){
        console.log("You win! You got it in " + (tries - 10) + "guesses!!");
    }else if(tries == 0){
        console.log("You lost. The number was " + passcode);
    }else{
        giveClue(guess);
    }
}

function giveClue(guess){
    if(guess > passcode){
        console.log(guess + " is too HIGH!");
    }else{
        console.log(guess + " is too LOW!")
    }
}
