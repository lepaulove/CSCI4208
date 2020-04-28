const {Row, Col} = Reactstrap;

class Profile extends React.Component{
    render(){
        return(
            <Row>
                <Col>
                    <img src = "images/profile.png" className = "img-fluid p-1" />
                </Col>
                <Col>
                    <h4> First Last </h4>
                    <p> This is info about me. </p>
                </Col>
            </Row>
        );
    }
}