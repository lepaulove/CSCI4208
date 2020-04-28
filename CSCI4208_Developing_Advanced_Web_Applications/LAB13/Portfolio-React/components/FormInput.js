const {FormGroup, Input} = Reactstrap;

class FormInput extends React.Component{
    render(){
        const{type, placeholder} = this.props;
        return(
            <FormGroup>
                <Input className = "form-control" type ={type} placeholder ={placeholder}></Input>
            </FormGroup>
        );
    }
} 