import React, { Component } from "react";
class AddPerson extends Component {
  state = {
    name: "",
    age: ""
  };
  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangeAge = event => {
    this.setState({ age: event.target.value });
  };
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <input
            type="text"
            value={this.state.age}
            onChange={this.handleChangeAge}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() =>
            this.props.onAddPerson(this.state.name, this.state.age)
          }
        >
          addPerson
        </button>
      </div>
    );
  }
}

export default AddPerson;
