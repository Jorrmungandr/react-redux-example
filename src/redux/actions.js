import { ADD, RM, EDIT } from './types.js';

const actions = {
  addToDo: (message) => {
    return {
      type: ADD,
      message,
    }
  },
  deleteToDo: (id) => {
    return {
      type: RM,
      id,
    }
  },
  editToDo: (id, newValue) => {
    return {
      type: EDIT,
      id,
      newValue,
    }
  }
}

export default actions;