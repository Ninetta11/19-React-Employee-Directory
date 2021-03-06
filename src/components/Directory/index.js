import React, { Component } from "react";
import Employee from "../Employee";
import EmployeeList from "../EmployeeList";
import SearchForm from "../SearchForm";
import Title from "../Title";
import API from "../../utils/API";

class Directory extends Component {

    state = {
        result: [],
        search: "",
        isAscending: true
    };

    // At app initialisation, displays 20 employees
    componentDidMount() {
        this.searchEmployee('20');
    }

    // API search
    searchEmployee = (query) => {
        API.search(query)
            .then(res => this.setState({ result: res.results }))
            .catch(err => alert(`Employees have failed to load. Please refesh page`));
    }

    // sets search characters based on user input
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value,
        });
    }

    // sorts employee list by event
    sortEmployeeList = (event) => {
        let sortBy = event.target.name.split(' ');
        let useMethod = "";
        let useCondition = "";

        switch (sortBy.length) {
            case 1:
                if (this.state.isAscending) {
                    useMethod = this.state.result.sort((a, b) => (a[sortBy[0]] > b[sortBy[0]]) ? 1 : -1);
                    useCondition = false
                }
                else {
                    useMethod = this.state.result.sort((a, b) => (a[sortBy[0]] > b[sortBy[0]]) ? -1 : 1);
                    useCondition = true
                }
                break;
            case 2:
                if (this.state.isAscending) {
                    useMethod = this.state.result.sort((a, b) => (a[sortBy[0]][sortBy[1]] > b[sortBy[0]][sortBy[1]]) ? 1 : -1);
                    useCondition = false
                }
                else {
                    useMethod = this.state.result.sort((a, b) => (a[sortBy[0]][sortBy[1]] > b[sortBy[0]][sortBy[1]]) ? -1 : 1);
                    useCondition = true
                }
                break;
        }

        this.setState({
            result: useMethod,
            isAscending: useCondition
        });
    }

    // filters employees based on set search characters
    filterEmployeeList = () => {
        if (!this.state.search) {
            return this.state.result;
        }
        else {
            return this.state.result.filter(
                (employee) => employee.name.first.toLowerCase().includes(this.state.search) || employee.name.last.toLowerCase().includes(this.state.search));
        };
    }

    // renders employee list
    render() {
        return (
            <div>
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <br></br>
                <EmployeeList>
                    <Title
                        sort={this.sortEmployeeList}
                    ></Title>
                    <tbody>
                        {this.filterEmployeeList().map((employee, index) => (
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
                    </tbody>
                </EmployeeList>
            </div>
        );
    }
}

export default Directory;