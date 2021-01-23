import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee by Last Name"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search Last Name
        </button>
      </div>
      <div className="btn-toolbar">
      <button onClick={props.handleNameSort} className="btn btn-primary mr-1">Name</button>
      <button onClick={props.resetSearch} type="button" className="btn btn-primary mr-1">Reset Search</button>
      </div>
    </form>
  );
}

export default SearchForm;