// let deck = new Deck();
let player = new Player(deck.deal(), deck.deal());
let dealer = new Dealer(deck.deal(), deck.deal());
console.log(player.cards);
console.log(dealer.cards);
console.log(deck.calculateCardTotal(player.cards));
console.log(deck.calculateCardTotal(dealer.cards));



