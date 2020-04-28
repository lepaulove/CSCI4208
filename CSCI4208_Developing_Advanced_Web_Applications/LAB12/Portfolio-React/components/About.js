class About extends React.Component{
    render(){
        return(
            <div id = "about" className = "container bg-primary" >
                <h1> About </h1>
                <hr/>
                <Profile />
                <SkillTable />
            </div>
        );
    }
} 