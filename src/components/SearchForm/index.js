function SearchForm(props) {
    return (
        <form className="form-row">
            <div className="col-4"></div>
            <div className="col-4">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search By Name"
                    id="search"
                />
            </div>
        </form>
    );
}

export default SearchForm;
