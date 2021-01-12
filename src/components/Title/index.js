function Title(props) {
    return (
        <thead className="list-group-item-primary">
            <tr>
                <th></th>
                <th scope="col">Image</th>
                <th scope="col">Name <button name="name.first" className="btn btn-secondary btn-sm dropdown-toggle" onClick={props.sort}></button></th>
                <th scope="col">Phone</th>
                <th scope="col">Email <button name="email" className="btn btn-secondary btn-sm dropdown-toggle" onClick={props.sort}></button></th>
                <th scope="col">Location <button name="location.state" className="btn btn-secondary btn-sm dropdown-toggle" onClick={props.sort}></button></th>
            </tr>
        </thead>
    );
}

export default Title;
