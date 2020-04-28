const {Container, CardDeck} = Reactstrap;

class Projects extends React.Component{
    render(){
        return(
            <Container id = "projects" className = "bg-success">
                <h1> Projects </h1>
                <hr/>
                <Container>
                    <CardDeck>
                        <ProjectCard type = 'Type 1' name = 'Project 1' author = "me"/>
                        <ProjectCard type = 'Type 2' name = 'Project 2' author = "myself"/>
                        <ProjectCard type = 'Type 3' name = 'Project 3' author = "I"/>
                    </CardDeck>
                </Container>
            </Container>
        );
    }
} 