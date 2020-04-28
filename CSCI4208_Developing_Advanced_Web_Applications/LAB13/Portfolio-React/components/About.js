const {Container} = Reactstrap

class About extends React.Component{
    render(){
        return(
            <Container id = "about" className = "bg-primary" >
                <h1> About </h1>
                <hr/>
                <Profile />
                <SkillTable />
            </Container>
        );
    }
} 