class NavOption extends React.Component{
    render(){
        const{href , label} = this.props;
        return(
            <li className = "nav-item">
                <a className = "nav-link text-light" href={href}>{label}</a>
            </li>
        );
    }
} 