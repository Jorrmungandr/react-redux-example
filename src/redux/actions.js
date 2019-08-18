import { ADD } from './types.js';

const addToDo = (message) => {
  return {
    type: ADD,
    message: message
  }
};

export default addToDo;