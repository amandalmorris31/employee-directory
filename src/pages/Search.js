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
    employeeArray:[],
    filteredArray:[]
  };

  // When the component mounts, get a list of 200 employees and update this.state.employees
  componentDidMount() {

    API.getEmployee()
      .then(employeeRes=> this.setState({
        employeeArray:employeeRes.data.results,
        filteredArray:employeeRes.data.results
      }));
   
    }

    
    getSearchedName = (query) =>{
      const {employeeArray} = this.state;
      const filteredArray = employeeArray.filter((employee)=>{
        // console.log(employee);
        if (employee.name.first.includes(query) || employee.name.last.includes(query)){
          return employee
        }
      })
      return filteredArray;
    };
  
//grabs the user input
  handleInputChange = event => {
    // console.log(event.target.value);

    const filteredArray = this.getSearchedName(event.target.value)
    
    this.setState({ 
      search: event.target.value,
      filteredArray: filteredArray
    });
  };

  //When the form is submitted, search RandomUser for the value of this.state.search
  handleFormSubmit = event => {
    event.preventDefault();
    this.getSearchedName(this.state.search)
      
        // this.setState({ results: res.data.message, error: "" });
      
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Name</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <SearchResults 
          employeeArray={this.state.filteredArray} />
        </Container>
      </div>
    );
  }
}

export default Search;
