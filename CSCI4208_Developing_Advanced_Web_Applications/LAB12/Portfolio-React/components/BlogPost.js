class BlogPost extends React.Component{
    render(){
        return(
            <div className = "container">
                <h3> {this. props . title } </h3>
                <small> {this. props . date } </small>
                <p> {this. props . summary } </p>
                <a className = "btn btn-outline-dark" href = "#" > Read More </a>
                <hr/>
            </div>
        );
    }
} 