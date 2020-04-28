class GamePlay extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            player: this.props.player,
            dealer: this.props.dealer,
            playerStatus: `<h3>WINNER!!!</h3>`,
            bet: this.props.playerBet,
            showDealerHand: false,
            displayWinner: false,
            replay: false,
            gamePlay: true
        }
        this.updateJellybeanTotal = this.updateJellybeanTotal.bind(this)
        this.stay = this.stay.bind(this)
    }

    hit = ()=>{
        this.setState(prevState => {
            let player = Object.assign({}, prevState.player);  // creating copy of state variable jasper
            player.cards.push(this.props.deck.deal());
            player.currentScore = this.props.deck.calculateCardTotal(player.cards); 
            player.bust = this.props.deck.checkBust(player.currentScore);                   // update the name property, assign a new value    
            if(player.bust){
                this.stay()
            }             
            return { player };                                 // return new object jasper object
          })
        // console.log("The bet was " + this.props.playerBet);
        // console.log(this.state.player);
        // console.log(this.state.dealer);
    }
    
    async stay(){
        // console.log(this.state.dealer.currentScore)
        this.setState({showDealerHand: true})
        while(this.state.dealer.currentScore < 17){
            await this.setState(prevState => {
                let dealer = Object.assign({}, prevState.dealer);  // creating copy of state variable jasper
                dealer.cards.push(this.props.deck.deal());
                dealer.currentScore = this.props.deck.calculateCardTotal(dealer.cards); 
                dealer.bust = this.props.deck.checkBust(dealer.currentScore);               
            return { dealer };                                 // return new object jasper object
              })
        }
        this.winnerCircle(this.state.player, this.state.dealer)

        this.setState({displayWinner: true})
    }

    winnerCircle = (player, dealer) =>{
        if(player.bust && dealer.currentScore < 21){
            this.updateJellybeanTotal('lose')
            this.setState({playerStatus: <h3>You Lose</h3>}) 
        }else if(dealer.bust && player.currentScore < 21){
            this.updateJellybeanTotal('win')
            this.setState({playerStatus: <h3>WINNER!!!</h3>}) 
        }else if(player.currentScore < dealer.currentScore){
            this.updateJellybeanTotal('lose')
            this.setState({playerStatus: <h3>You Lose</h3>}) 
        }else if(dealer.currentScore < player.currentScore){
            this.updateJellybeanTotal('win')
            this.setState({playerStatus: <h3>WINNER!!!</h3>}) 
        }else if(dealer.bust && player.bust){
            this.setState({playerStatus: <h3>DRAW</h3>}) 
        }else{
            this.setState({playerStatus: <h3>DRAW</h3>}) 
        }
    }

    displayCards = (cards)=>{
        if(cards.length > 5){ 
            return(
                <div>
                    <CardRender value={cards[0].value} suit={cards[0].suit} />
                    <CardRender value={cards[1].value} suit={cards[1].suit} />
                    <CardRender value={cards[2].value} suit={cards[2].suit} />
                    <CardRender value={cards[3].value} suit={cards[3].suit} />
                    <CardRender value={cards[4].value} suit={cards[4].suit} />
                    <CardRender value={cards[5].value} suit={cards[5].suit} />
                </div> )}
        if(cards.length > 4){ 
            return(
                <div>
                    <CardRender value={cards[0].value} suit={cards[0].suit} />
                    <CardRender value={cards[1].value} suit={cards[1].suit} />
                    <CardRender value={cards[2].value} suit={cards[2].suit} />
                    <CardRender value={cards[3].value} suit={cards[3].suit} />
                    <CardRender value={cards[4].value} suit={cards[4].suit} />
                </div> )}
        if(cards.length > 3){ 
            return(
                <div>
                    <CardRender value={cards[0].value} suit={cards[0].suit} />
                    <CardRender value={cards[1].value} suit={cards[1].suit} />
                    <CardRender value={cards[2].value} suit={cards[2].suit} />
                    <CardRender value={cards[3].value} suit={cards[3].suit} />
                </div> )}
        if(cards.length > 2){ 
            return(
                <div>
                    <CardRender value={cards[0].value} suit={cards[0].suit} />
                    <CardRender value={cards[1].value} suit={cards[1].suit} />
                    <CardRender value={cards[2].value} suit={cards[2].suit} />
                </div> )}
        return(
            <div>
                <CardRender value={cards[0].value} suit={cards[0].suit} />
                <CardRender value={cards[1].value} suit={cards[1].suit} />
            </div> )
    }

    async updateJellybeanTotal(status){
        await this.setState(prevState => {
            let player = Object.assign({}, prevState.player); 
            if(status == 'win'){
                player.jellyBeans += this.state.bet;
                
            }else if(status == 'lose'){
                player.jellyBeans -= this.state.bet;
            }
            return { player };
        })  
    }

    startAgain = ()=>{
        this.props.updatePlayerJelleybeans(this.state.player)
        this.props.toggleView()
    }

    render(){
        let dealerHand
        let winner
        let playAgain
        let replay
        let gamePlay

        if(this.state.showDealerHand){
            dealerHand = (
                <div>
                    <p id='print-dealer-cards'>{this.displayCards(this.state.dealer.cards)}</p>
                    <p id='print-dealer-total'>Dealer Card total: {this.state.dealer.currentScore}</p>
                </div>
            )

            winner = this.state.playerStatus
            playAgain = (
                <button onClick = {this.startAgain}>PLAY AGAIN</button>
            )
        }

        if(this.state.replay){
            replay = <App />
        }

        if(!this.state.replay){
            gamePlay = (
                <div>
                    <h1>Game Phase</h1>
                    <h3>GOOD LUCK!</h3>
                    <p id='print-bet'>Your wager: {this.props.playerBet} Jellybeans</p>
                    {this.displayCards(this.state.player.cards)}
                    <p id='print-player-total'>Your Card Total: {this.state.player.currentScore}</p>
                    <p id='player-bust'></p>
                    <button id='hit' onClick = {this.hit}>HIT</button>
                    <button id='stay'onClick = {this.stay}>STAY</button>
                </div>
            )
        }

        return(
            <div>
                {gamePlay}
                {dealerHand}
                {winner}
                {playAgain}
                {replay}
            </div>
        );
    }
}