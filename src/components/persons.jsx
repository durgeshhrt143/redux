import React, { Component } from "react";
import AddPerson from "./addPerson";
import Person from "./person";
import * as actionType from "../store/action";
import { connect } from "react-redux";
class Persons extends Component {
  render() {
    return (
      <div className="container">
        <AddPerson onAddPerson={this.props.onAddPerson} />
        {this.props.pre.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            onDelete={() => this.props.onRemovePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { pre: state.persons };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: (name, age) =>
      dispatch({
        type: actionType.ADD_PERSON,
        person: { name: name, age: age }
      }),
    onRemovePerson: id =>
      dispatch({ type: actionType.DELETE_PERSON, personId: id })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
