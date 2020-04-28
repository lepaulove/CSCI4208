const {NavItem, NavLink} = Reactstrap;

class NavOption extends React.Component{
    render(){
        return(
            <NavItem>
                <NavLink href={this.props.href} className="text-light">
                    {this.props.text}
                </NavLink>
            </NavItem>
        );
    }
} 