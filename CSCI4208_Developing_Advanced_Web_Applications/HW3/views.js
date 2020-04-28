let playerCardText = document.getElementById("print-player-cards");
let dealerCardText = document.getElementById("print-dealer-cards");
let playerCardTotal = document.getElementById("print-player-total");
let dealerCardTotal = document.getElementById("print-dealer-total");
let betText = document.getElementById("display-bet");
let printBetText = document.getElementById("print-bet");  
let playerBustText = document.getElementById("player-bust");
let dealerBustText = document.getElementById("dealer-bust");
let jellybeanTotal = document.getElementById("jellybean-total");
let winnerCircle = document.getElementById("winner-circle");

jellybeanTotal.innerHTML = `You have <b>${player.jellyBeans} Jellybeans</b> remaining.`

function updateBet(bet){
    betText.innerHTML = `${bet}`;
}

function updateJellybean(){
    jellybeanTotal.innerHTML = `${player.jellyBeans}`
}

function printBet(bet){
    if(bet == 1){
        printBetText.innerHTML = `You waged 1 Jellybean!`;
    }else{
        printBetText.innerHTML = `You waged ${bet} Jellybeans!`;
    }
}

function printPlayerBust(){
    playerBustText.innerHTML = `Player Bust`;
}

function printDealerBust(){
    dealerBustText.innerHTML = "Dealer Bust";
}

function printplayerJellybeanTotal(){
    jellybeanTotal.innerHTML = `You have <b>${player.jellyBeans} Jellybeans</b> remaining.`
}


function printDeck(){
    let card;
    console.log(deck.getDeckSet());
    playerCardText.innerHTML = "Player's Hand: ";
    playerCardTotal.innerHTML = "Player score: ";
    dealerCardText.innerHTML = "Dealer's Hand: ";
    dealerCardTotal.innerHTML = "Dealer score: ";

    
    for(card of player.cards){
        console.log(card);
        playerCardText.innerHTML += `[${card.value}${card.suit}] `;
    }

    for(card of dealer.cards){
        console.log(card);
        dealerCardText.innerHTML += `[${card.value}${card.suit}] `;
    }

    playerCardTotal.innerHTML += `${player.currentScore}`
    dealerCardTotal.innerHTML += `${dealer.currentScore}`
}

function printStatus(string){
    winnerCircle.innerHTML = string;
}

function clearCards(){
    playerCardText.innerHTML = "";
    playerCardTotal.innerHTML = "";
    dealerCardText.innerHTML = "";
    dealerCardTotal.innerHTML = "";
}

function reset(){
    updateBet(0);
    clearCards();
    playerCardTotal.innerHTML = ``;
    dealerCardTotal.innerHTML = ``;
    printBetText.innerHTML = ``;
    dealerBustText.innerHTML = ``;
    playerBustText.innerHTML = ``;
    winnerCircle.innerHTML = ``;
    deck.shuffle(deck.card);
    player.resetPlayer(deck.deal(), deck.deal());
    dealer.resetDealer(deck.deal(), deck.deal());
    deck.shuffle(deck.card);
}