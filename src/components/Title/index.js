function Title(props) {
    return (
        <thead className="list-group-item-primary">
            <tr>
                <th scope="col" name="image">Image</th>
                <th scope="col" name="fullName">Name <button className="btn btn-secondary btn-sm dropdown-toggle" onClick={props.sort}></button></th>
                <th scope="col" name="phone">Phone</th>
                <th scope="col" name="email">Email</th>
                <th scope="col" name="location">Location</th>
            </tr>
        </thead>
    );
}

export default Title;
