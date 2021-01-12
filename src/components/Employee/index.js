import "./style.css";

function Employee(props) {
    return (
        <tr data={props.id}>
            <td></td>
            <td>
                <img alt={props.lastName} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
            </td>
            <td>{props.firstName} {props.lastName}</td>
            <td>{props.phone}</td>
            <td><a className="nav-link" href={"mailto:" + props.email}>{props.email}</a></td>
            <td>{props.location}</td>
        </tr>
    );
}

export default Employee;
