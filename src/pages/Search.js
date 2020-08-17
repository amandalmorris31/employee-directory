import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: "",
    employeeArray:[]
  };

  // When the component mounts, get a list of 200 employees and update this.state.employees
  componentDidMount() {

    API.getEmployee()
      .then(employeeRes=> this.setState({employeeArray:employeeRes.data.results}));
    // API.getBaseEmployeesList()
    //   .then(res => this.setState({ employees: res.data.message }))
    //   .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getEmployeesOfEmployee(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Name!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          {/* <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.employees}
          /> */}
          <SearchResults 
          employeeArray={this.state.employeeArray} />
        </Container>
      </div>
    );
  }
}

export default Search;
