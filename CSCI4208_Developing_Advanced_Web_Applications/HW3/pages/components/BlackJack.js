// import Background from '../images/unnamed.jpg'

let backgroundStyle = {
    backgroundImage: `url(../images/unnamed.jpg)`
}

class BlackJack extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            deck: this.props.deck,
            player: new Player(this.props.deck.deal(), this.props.deck.deal(), this.props.deck),
            dealer: new Dealer(this.props.deck.deal(), this.props.deck.deal(), this.props.deck),
            playerBet: 0,
            viewToggle: true
        }

        this.toggleViews = this.toggleViews.bind(this)
        this.updatePlayerJelleybeans = this.updatePlayerJelleybeans.bind(this)
    }

    toggleViews(){
        this.setState({viewToggle: !this.state.viewToggle})
    }

    async setBet(bet){
        await this.setState({playerBet: bet})
    }

    async updatePlayerJelleybeans(newPlayer){
        console.log(newPlayer)
        await this.setState({player: newPlayer})
        await this.setState(prevState =>{
            let newState = Object.assign({}, prevState)
            let newDeck = new Deck()
            let card1 = newDeck.deal()
            let card2 = newDeck.deal()
            let card3 = newDeck.deal()
            let card4 = newDeck.deal()
            newState.player.deck = newDeck
            newState.dealer.deck = newDeck
            newState.player.cards = [card1, card2]
            newState.dealer.cards = [card3, card4]            
            newState.player.currentScore = newDeck.calculateCardTotal(newState.player.cards)
            newState.dealer.currentScore = newDeck.calculateCardTotal(newState.player.cards)


            return {newState}
        })


        // await this.setState(prevState =>{
        //     let player = Object.assign({}, prevState.player)
        //     player.jellyBeans = jellybeans
        //     {return player}
        // })
        // console.log(jellybeans)
        // await this.setState({player: players})
    }

    render(){    
        console.log(this.state.playerBet)    
        if(this.state.viewToggle){
            return (
            <BetPhase 
                deck = {this.state.deck} 
                player = {this.state.player} 
                dealer = {this.state.dealer} 
                toggleView = {this.toggleViews.bind(this)}
                setBet = {this.setBet.bind(this)}
                />)
        }
        
        if(!this.state.viewToggle){
           return (
            <GamePlay 
                playerBet = {this.state.playerBet} 
                deck = {this.state.deck} 
                player = {this.state.player} 
                dealer = {this.state.dealer} 
                toggleView = {this.toggleViews.bind(this)} 
                updatePlayerJelleybeans = {this.updatePlayerJelleybeans.bind(this)}
                />)
        }
        return
            
            // <div >
            //     <BetPhase deck = {this.state.deck} player = {this.state.player} dealer = {this.state.dealer}/>
            //     <GamePlay playerBet = {this.state.currentBet} deck = {this.state.deck} player = {this.state.player} dealer = {this.state.dealer}/>
            // </div>
        
    }
}