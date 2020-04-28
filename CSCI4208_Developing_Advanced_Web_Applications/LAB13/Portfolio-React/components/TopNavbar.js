const {Navbar, NavbarBrand, Nav} = Reactstrap;

class TopNavbar extends React.Component{
    render(){
        return(
            <Navbar className = "bg-dark" fixed = "top">
                <NavbarBrand className = "text-light" href = "/"> Portfolio Name</NavbarBrand>
                <Nav>
                    <NavOption href = '#home' label = 'Home'/>
                    <NavOption href = '#about' label = 'About'/>
                    <NavOption href = '#projects' label = 'Projects'/>
                    <NavOption href = '#blog' label = 'Blog'/>
                    <NavOption href = '#contact' label = 'Contact'/>
                </Nav>
            </Navbar>
        );
    }
} 