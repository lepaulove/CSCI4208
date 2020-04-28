// import Background from '../images/unnamed.jpg'

let backgroundStyle = {
    backgroundImage: `url(../images/unnamed.jpg)`
}

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            deck: new Deck()
        }
    }
    
    render(){
        return(
            <div style={{backgroundColor: "green", margin: "auto", width: "50%", height:"50%"}}>
               <BlackJack deck = {this.state.deck}/>
            </div>
        );
    }
}