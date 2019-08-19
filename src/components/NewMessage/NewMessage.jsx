import React, { Component } from 'react';
import './NewMessages.scss';

export default class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitToDo = this.submitToDo.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitToDo(event) {
    if (event.keyCode === 13) {
      if (this.state.input !== '') {
        this.props.submitNewToDo(this.state.input);
        this.setState({
          input: '',
        });
      }
    }
  }

  render() {
    return (
      <div id="to-do-header">
        <h2>My To-Do List</h2>
        <input placeholder="New To-Do" value={this.state.input} onChange={this.handleChange} onKeyDown={this.submitToDo} />
      </div>
    );
  }
};