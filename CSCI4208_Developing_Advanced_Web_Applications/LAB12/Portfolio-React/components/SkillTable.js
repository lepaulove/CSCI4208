class SkillTable extends React.Component {
    render(){
        return(
            <table className = "table">
                <thead>
                    <tr>
                        <th colSpan = '2' className = 'text-center' > Technical Skills </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope = "row" > Backend tools </th>
                        <td> JavaScript, Node, NPM, Express, Passport </td>
                    </tr>
                    <tr>
                        <th scope = "row" > Frontend tools </th>
                        <td> JavaScript, HTML, CSS, React, Bootstrap, Reactstrap </td>
                    </tr>
                    <tr>
                        <th scope = "row" > Database tools </th>
                        <td> JavaScript, MongoDB, Mongoose </td>
                    </tr>
                </tbody>
            </table>
        );
    }
} 