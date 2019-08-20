import { ADD, RM, EDIT } from './types.js';

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [ ...state, { 
        message: action.message,
        id: new Date().getTime(),
      }];
    case RM:
      return state.filter(object => +object.id !== +action.id);
    case EDIT:
      console.log(action.id);
      console.log(action.newValue);
      const newState = state.map((object) => {
        if (+object.id === +action.id) {
          return {
            message: action.newValue,
            id: object.id,
          };
        }
        return object;
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default toDoReducer;