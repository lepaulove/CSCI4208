const {Container} = Reactstrap;

class Blog extends React.Component{
    render(){
        return(
            <Container id = "blog" className = "bg-warning">
                <h1> Blog </h1>
                <hr/>
                <Container>
                    <BlogPost title = 'Post #1' date = 'Date-01, YYYY' summary = "Summary Post 1"/>
                    <BlogPost title = 'Post #2' date = 'Date-02, YYYY' summary = "Summary Post 2"/>
                    <BlogPost title = 'Post #3' date = 'Date-03, YYYY' summary = "Summary Post 3"/>
                </Container>
            </Container>
        );
    }
}