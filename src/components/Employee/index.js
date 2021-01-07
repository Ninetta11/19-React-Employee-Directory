function Employee(props) {
    return (
        <li className="list-group-item">
            <img alt={props.firstName} {props.lastName} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
            <h3>{props.firstName} {props.lastName}   {props.phone}   {props.email}  {props.location}</h3>
        </li>
    );
}

export default Employee;
