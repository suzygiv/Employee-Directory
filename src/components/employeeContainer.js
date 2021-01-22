import React, { Component } from "react";
import Container from "./container";
import Col from "./col";
import Card from "./card";
import Wrapper from "./wrapper";
import SearchForm from "./searchForm";

import API from "../utils/API.js";

class EmployeeContainer extends Component {
  state = {
    result: [],
    filteredUser: [],
    search: "",
    filter: "",
    filterBy: "lastName",
    currentSort: "default",
    sortField: ""
  };

  // When this component mounts, search for specific employee
  componentDidMount() {
    API.getUsers()
      .then((res) => {
        this.setState({
          employees: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            city: e.location.city,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }


  searchEmployee = query => {
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
    this.searchEmployee(this.state.search);
    this.filterEmployees();
  };

  filterEmployees = (value) => { console.log("Search result: ", this.state.search)
  const newArray = this.state.filteredUser.filter(item => {
    // merge data together, then see if user input is anywhere inside
    let values = Object.values(item)
      .join("")
      .toLowerCase();
    return values.indexOf(this.state.search.toLowerCase()) !== -1;
  });
  console.log(newArray);
  this.setState({ filteredUser: newArray})
}

  render() {
    return (
      <Wrapper>
        <Container>
          <div className="row">
            <Col>
              <h2>Employee Directory</h2>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
          </div>

        <div className="row">
          <Col>
            <table className="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {[...this.state.result].map((item) => (
                  <Card
                    picture={item.picture}
                    firstName={item.name.first}
                    lastName={item.name.last}
                    email={item.email}
                    phone={item.phone}
                    city={item.location.city}
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