import React, { Component } from "react";
import Employee from "../Employee";
import EmployeeList from "../EmployeeList";
import SearchForm from "../SearchForm";
import Title from "../Title";
import search from "../../utils/API";

class Directory extends Component {

    state = {
        result: [],
        search: ""
    };

    // At app initialisation, display 50 employees
    componentDidMount() {
        this.searchEmployee('20');
    }

    // API search
    searchEmployee = (query) => {
        search(query)
            .then(res => this.setState({ result: res.results }))
            .catch(err => console.log(err));
    }

    // filter employee results based on characters inputted in search field
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state);

        //filter method here
    };

    render() {
        return (
            <div>
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeList>
                    <Title></Title>
                    {this.state.result.map((employee, index) => (
                        <Employee
                            id={index}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                            src={employee.picture.thumbnail}
                            phone={employee.phone}
                            email={employee.email}
                            location={employee.location.state}
                        />
                    ))}
                </EmployeeList>
            </div>
        );
    }
}

export default Directory;