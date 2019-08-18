import { ADD } from './types.js';

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [ ...state, action.message ];
    default:
      return state;
  }
};

export default toDoReducer;