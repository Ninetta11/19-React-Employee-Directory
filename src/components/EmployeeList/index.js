function EmployeeList(props) {
    return (
        <ul className="list-group">{props.children}</ul>
    );
}

export default EmployeeList;
