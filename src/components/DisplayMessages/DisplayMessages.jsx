import React, { Component } from 'react';
import './DisplayMessages.scss';

export default class DisplayMessages extends Component {
  render() {
    return (
      <ul id="todo-list">
        {this.props.toDos.map((todo, i) => 
          <li key={i} className="todo-container">
            <div>
              <h4>{todo}</h4>
            </div>
          </li> 
        )}
      </ul>
    );
  }
};
