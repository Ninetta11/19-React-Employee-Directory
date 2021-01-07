import React, { Component } from "react";
import Employee from "../Employee";
import EmployeeList from "../EmployeeList";
import SearchForm from "../SearchForm";
import API from "../../utils/API";

class Directory extends Component {

    state = {
        result: {},
        search: ""
    };

    // At app initialisation, display 50 employees
    componentDidMount() {
        this.searchEmployee('50');
    }

    // API search
    searchEmployee = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }

    // filter employee results based on characters inputted in search field
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });

        // filter method here

    };

    render() {
        return (
            <div>
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeList>
                    <Employee
                        firstName={this.state.result.name.first}
                        lastName={this.state.result.name.last}
                        src={this.state.result.picture.thumbnail}
                        phone={this.state.result.phone}
                        email={this.state.result.email}
                        location={this.state.result.state}
                    />
                </EmployeeList>
            </div>
        );
    }
}

export default Directory;