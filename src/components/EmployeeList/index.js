function EmployeeList(props) {
    return (
        <table className="table">{props.children}</table>
    );
}

export default EmployeeList;
