import React, { Component } from "react";
import Container from "./container";
import Col from "./col";
import Card from "./card";
import Wrapper from "./wrapper";
import SearchForm from "./searchForm";

import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for specific employee
  componentDidMount() {
    this.firstEmployee()
  }

  firstEmployee = () => {
    API.getUsers()
    .then(res =>
      this.setState({result: res.data.results})
      )
      .catch(err => console.log(err));
  }; 

  searchEmployee = (query) => {
    console.log(query)
    API.getUsers(query)
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Employee API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    const filteredResults = this.state.result.filter(person => person.name.last.includes(this.state.search))
    console.log(this.state.search);
    this.setState({result: filteredResults});
  };

  handleNameSort = event => {
    event.preventDefault();
    const filteredResults = this.state.result.sort((a, b) => (a.name.first > b.name.first)? 1 : -1)
    console.log(this.state.search);
    this.setState({result: filteredResults});
  };

  resetSearch = event => {
    event.preventDefault(); 
    const reset = this.getUsers(); 
    return reset;
  }

  render() {
    return (
      <Wrapper>
        <Container>
        <div className="row">
            <Col>
              <h1>Employee Directory</h1>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                handleNameSort={this.handleNameSort}
              />
            </Col>
          </div>

          <div className="row">
            <Col>
              <table className="table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <button onClick={this.handleNameSort}>First Name</button>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {[...this.state.result].map((item) => (
                    <Card
                      picture={item.picture.large}
                      firstName={item.name.first}
                      lastName={item.name.last}
                      email={item.email}
                      phone={item.phone}
                      key={item.key}
                    />
                  ))}
                </tbody>
              </table>
            </Col>
          </div>
        </Container>
      </Wrapper>
    )
  }
}
export default EmployeeContainer;