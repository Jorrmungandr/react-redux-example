import React, { Component } from 'react';
import NewMessage from '../../components/NewMessage/NewMessage.jsx';
import DisplayMessages from '../../components/DisplayMessages/DisplayMessages.jsx';
import addToDo from '../../redux/actions.js';
import toDoReducer from '../../redux/reducers.js';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './Home.scss';

const mapStateToProps = (state) => {
  return { toDos: state, };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewToDo: (todo) => {
      dispatch(addToDo(todo));
    }
  }
};

const store = createStore(toDoReducer);

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);
const DisplayMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);

export default class Home extends Component {
  render() {
    return(
      <section id="to-do-list">
        <Provider store={store}>
          <NewMessageContainer />
        </Provider>
        <Provider store={store}>
          <DisplayMessagesContainer />
        </Provider>
      </section>
    );
  }
};