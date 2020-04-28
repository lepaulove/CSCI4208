const {Container} = Reactstrap;

class News extends React.Component{
    render(){
        return(
            <Container className = "bg-danger">
                <h1>Welcome</h1>
                <hr/>
                <p>
                    This sections welcomes people to your page and summerizes what the page is
                    about and what the purpose of it is for.
                </p>
            </Container>
        )
    }
}