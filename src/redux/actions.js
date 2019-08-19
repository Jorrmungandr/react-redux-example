import { ADD } from './types.js';
import { RM } from './types.js';

const actions = {
  addToDo: (message) => {
    return {
      type: ADD,
      message,
    }
  },
  deleteToDo: (message) => {
    return {
      type: RM,
      message,
    }
  },
}

export default actions;