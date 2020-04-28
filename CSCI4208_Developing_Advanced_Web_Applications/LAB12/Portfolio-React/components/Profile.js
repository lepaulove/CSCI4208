class Profile extends React.Component{
    render(){
        return(
            <div className = "row">
                <div className = "col">
                    <img src = "images/profile.png" className = "img-fluid p-1" />
                </div>
                <div className = "col">
                    <h4> First Last </h4>
                    <p> This is info about me. </p>
                </div>
            </div>
        );
    }
}