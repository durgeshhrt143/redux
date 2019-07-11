import * as actionType from "../action";
const intialState = {
  persons: []
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: action.person.name,
        age: action.person.age
      };

      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionType.DELETE_PERSON:
      return {
        ...state,

        persons: state.persons.filter(person => person.id !== action.personId)
      };
  }
  return state;
};
export default reducer;
