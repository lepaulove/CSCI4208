class Blog extends React.Component{
    render(){
        return(
            <div id = "blog" className = "container bg-warning">
                <h1> Blog </h1>
                <hr/>
                <div className = "container">
                    <BlogPost title = 'Post #1' date = 'Date-01, YYYY' summary = "Summary Post 1"/>
                    <BlogPost title = 'Post #2' date = 'Date-02, YYYY' summary = "Summary Post 2"/>
                    <BlogPost title = 'Post #3' date = 'Date-03, YYYY' summary = "Summary Post 3"/>
                </div>
            </div>
        );
    }
}