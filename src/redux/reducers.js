import { ADD } from './types.js';
import { RM } from './types.js';

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [ ...state, action.message ];
    case RM:
      return state.filter(e => e !== action.message);
    default:
      return state;
  }
};

export default toDoReducer;