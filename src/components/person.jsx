import React from "react";
const Person = props => {
  return (
    <div onClick={props.onDelete} className="card">
      <div className="card-body">
        <div>name: {props.name}</div>
        <div>age: {props.age}</div>
      </div>
    </div>
  );
};

export default Person;
