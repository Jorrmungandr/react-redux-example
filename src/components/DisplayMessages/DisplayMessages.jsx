import React, { Component } from 'react';
import './DisplayMessages.scss';

export default class DisplayMessages extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  handleDelete(event) {
    this.props.deleteToDoById(event.target.getAttribute('delete'));
  }
  
  handleEdit(event) {
    const parent = event.target.parentElement;
    parent.querySelector('h4').style.display = 'none';
    parent.parentElement.querySelector('.edit-container').style.display = 'block';
  }
  
  submitEdit(event) {
    if (event.keyCode == 13) {
      const parent = event.target.parentElement;
      parent.style.display = 'none';
      parent.parentElement.querySelector('h4').style.display = 'block';
      this.props.editToDoById(event.target.getAttribute('edit'), event.target.value);
      event.target.value = '';
    }
  }

  render() {
    return (
      <ul id="todo-list">
        {this.props.toDos.map((todo, i) => 
          <li key={i} className="todo-container">
            <div className="edit-container">
              <input type="text" edit={todo.id} name="edit" id="edit" onKeyDown={this.submitEdit} />
            </div>
            <div>
              <h4>{todo.message}</h4>
              <span id="edit" onClick={this.handleEdit}>E</span>
              <span id="trash" delete={todo.id} onClick={this.handleDelete}>X</span>
            </div>
          </li> 
        )}
      </ul>
    );
  }
};
