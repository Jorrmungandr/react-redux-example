import React, { Component } from 'react';
import './DisplayMessages.scss';

export default class DisplayMessages extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    this.props.deleteToDo(event.target.getAttribute('delete'));
  }

  render() {
    return (
      <ul id="todo-list">
        {this.props.toDos.map((todo, i) => 
          <li key={i} className="todo-container">
            <div>
              <h4>{todo}</h4><span id="trash" delete={todo} onClick={this.handleDelete}>X</span>
            </div>
          </li> 
        )}
      </ul>
    );
  }
};
