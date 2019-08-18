import React, { Component } from 'react';

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

  submitToDo() {
    if (this.state.input !== '') {
      this.props.submitNewToDo(this.state.input);
      this.setState({
        input: '',
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Add To Do:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <input value="Add" type="button" onClick={this.submitToDo} />
      </div>
    );
  }
};