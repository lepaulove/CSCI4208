class BetPhase extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            player: this.props.player,
            dealer: this.props.dealer,
            deck: this.props.deck,
            maxBet: this.props.player.jellyBeans,
            currentBet: 0,
            playerBetting: true,
            playerReady: false
        }
    }
    
    increase = ()=>{
        if(this.state.currentBet < this.state.maxBet){
            this.setState({currentBet: ++this.state.currentBet})
            console.log(this.state.currentBet)
        }
        
    }

    decrease = ()=>{
        if(this.state.currentBet > 0){
            this.setState({currentBet: --this.state.currentBet})
            console.log(this.state.currentBet)
        }
        
    }

    startGame = ()=>{
        // console.log(this.state.currentBet)
        this.props.setBet(this.state.currentBet)
        this.props.toggleView()
        // this.setState({playerReady: true})
        // console.log("START")
    }

    render(){
        let gamePhaseElement = (
            <div>
                <h1>PLACE YOUR BET</h1>
                <p id='jellybean-total'>Current Jellybean Total: {this.state.player.jellyBeans}</p>
                <button id='increase-currentBet' type='button' onClick={this.increase}>Increase Bet</button>
                <h5 id='display-currentBet'>{this.state.currentBet} Jellybeans</h5>
                <button id='decrease-currentBet' onClick={this.decrease}>Decrease Bet</button><br></br>
                <button id='place-currentBet' onClick={this.startGame}>PLACE BET</button>
            </div>
            )

        let gamePlay
        if(this.state.playerReady){
            // gamePlay = <GamePlay playerBet = {this.state.currentBet} deck = {this.state.deck} player = {this.state.player} dealer = {this.state.dealer}/>
        }else{
            gamePlay = gamePhaseElement
        }
        return(
            <div>
                {gamePlay}
            </div>
        )
    }
}