let bet = 0;
let increaseBetButton = document.getElementById("increase-bet");
let decreaseBetButton = document.getElementById("decrease-bet");
let betDisplay = document.getElementById("display-bet");
let placeBet = document.getElementById("place-bet");
let hitButton = document.getElementById("hit");
let stayButton = document.getElementById("stay");
let playAgainButton = document.getElementById("play-again");

increaseBetButton.addEventListener('click', increaseBetButtonEvent);
decreaseBetButton.addEventListener('click', decreaseBetButtonEvent);
placeBet.addEventListener('click', placeBetEvent);
hitButton.addEventListener('click', hitEvent);
stayButton.addEventListener('click', stayEvent);
playAgainButton.addEventListener('click', playAgainEvent);


function increaseBetButtonEvent(){
    if(bet < player.jellyBeans){
        bet++;
    }
    updateBet(bet);
}

function decreaseBetButtonEvent(){
    if(bet > 0){
        bet--;
    }  
    updateBet(bet);
}

function placeBetEvent(){
    printBet(bet);
    player.playerJellyBeans -= bet;
    printDeck();
    increaseBetButton.disabled = true;
    decreaseBetButton.disabled = true;
    placeBet.disabled = true;
    hitButton.disabled = false;
    stayButton.disabled = false;
}

function hitEvent(){
    player.hit();
    clearCards();
    printDeck();
}

function stayEvent(){
    player.stay();
    clearCards();
    printDeck();
}

function playAgainEvent(){
    bet = 0;
    increaseBetButton.disabled = false;
    decreaseBetButton.disabled = false;
    placeBet.disabled = false;
    playAgainButton.disabled = true;
    reset();
}