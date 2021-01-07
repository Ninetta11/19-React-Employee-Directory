function SearchForm(props) {
    return (
        <form>
            <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search"
                id="search"
            />
        </form>
    );
}

export default SearchForm;
