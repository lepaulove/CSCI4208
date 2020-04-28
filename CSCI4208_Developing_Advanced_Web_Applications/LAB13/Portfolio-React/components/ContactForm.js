const {Container, Form} = Reactstrap;

class ContactForm extends React.Component{
    render(){
        return(
            <Container className = "bg-secondary" id = "contact">
                <h1> Contact </h1>
                <hr/>
                <Form>
                    <FormInput type = 'text' placeholder = 'name'/>
                    <FormInput type = 'email' placeholder = 'email'/>
                    <FormInput type = 'textarea' placeholder = 'message'/>
                    <button className = "btn btn-lg btn-primary"> Submit </button>
                </Form>
            </Container>
        );
    }
} 