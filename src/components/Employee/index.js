function Employee(props) {
    return (
        <li className="list-group-item" data={props.id}>
            <img alt={props.firstName} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
            <h3>{props.firstName} {props.lastName}   {props.phone}   {props.email}  {props.location}</h3>
        </li>
    );
}

export default Employee;
