let button = document.getElementById("guess-button");
button.addEventListener("click", buttonEvent);

function buttonEvent(){
    let number = guess.toString();
    guessNumber(number);
}

let up100s = document.getElementById("up-100s");
let up10s = document.getElementById("up-10s");
let up1s = document.getElementById("up-1s");
let down100s = document.getElementById("down-100s");
let down10s = document.getElementById("down-10s");
let down1s = document.getElementById("down-1s");

up100s.addEventListener("click", function(){ incrementEvent('hundreds')});
up10s.addEventListener("click", function(){ incrementEvent('tens')});
up1s.addEventListener("click", function(){ incrementEvent('ones')});
down100s.addEventListener("click", function(){ decrementEvent('hundreds')});
down10s.addEventListener("click", function(){ decrementEvent('tens')});
down1s.addEventListener("click", function(){ decrementEvent('ones')});

function incrementEvent(key){
    guess.increment(key);
    printDigits();
}

function decrementEvent(key){
    guess.decrement(key);
    printDigits();
}


