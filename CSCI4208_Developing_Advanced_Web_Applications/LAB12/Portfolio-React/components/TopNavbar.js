class TopNavbar extends React.Component{
    render(){
        return(
            <div className = "navbar bg-dark" fixed = "top">
                <div className = "navbar-brand text-light" href = "/"> Portfolio Name</div>
                <ul className = "nav">
                    <NavOption href = '#home' label = 'Home'/>
                    <NavOption href = '#about' label = 'About'/>
                    <NavOption href = '#projects' label = 'Projects'/>
                    <NavOption href = '#blog' label = 'Blog'/>
                    <NavOption href = '#contact' label = 'Contact'/>
                </ul>
            </div>
        );
    }
} 