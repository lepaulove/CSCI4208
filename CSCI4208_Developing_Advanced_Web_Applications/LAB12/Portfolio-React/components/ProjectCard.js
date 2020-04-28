class ProjectCard extends React.Component{
    render(){
        const cardformat = "card bg-dark text-light text-center";
        return(
            <div className ={cardformat}>
                <div className = "card-header">{this.props.type}</div>
                <img className = "card-img" src='images/logo.png'/>
                <div className = "card-title">{this.props.name}</div>
                <div className = "card-footer">{this.props.author}</div>
            </div>
        );
    }
}