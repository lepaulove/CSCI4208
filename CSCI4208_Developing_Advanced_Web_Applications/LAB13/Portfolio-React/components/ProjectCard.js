const {Card, CardHeader, CardImg, CardTitle, CardFooter} = Reactstrap;

class ProjectCard extends React.Component{
    render(){
        const textformat = "bg-dark text-light text-center";
        return(
            <Card color className={textformat}>
                <CardHeader>{this.props.type}</CardHeader>
                <CardImg src='images/logo.png'/>
                <CardTitle>{this.props.name}</CardTitle>
                <CardFooter>{this.props.author}</CardFooter>
            </Card>
        );
    }
}