class Projects extends React.Component{
    render(){
        return(
            <div id = "projects" className = "container bg-success">
                <h1> Projects </h1>
                <hr/>
                <div className = "container">
                    <div className = "card-deck">
                        <ProjectCard type = 'Type 1' name = 'Project 1' author = "me"/>
                        <ProjectCard type = 'Type 2' name = 'Project 2' author = "myself"/>
                        <ProjectCard type = 'Type 3' name = 'Project 3' author = "I"/>
                    </div>
                </div>
            </div>
        );
    }
} 