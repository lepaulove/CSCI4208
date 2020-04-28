class FormInput extends React.Component{
    render(){
        const{type, placeholder} = this.props;
        return(
            <div className = "form-group">
                <input className = "form-control" type ={type} placeholder ={placeholder}></input>
            </div>
        );
    }
} 