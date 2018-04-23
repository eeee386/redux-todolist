import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import GIFComponent from './GIFComponent';
import {connect} from "react-redux";

const App = (state) => {
    return (
      <div>
          <h1>To-do List App</h1>
          <AddTodo />
          <TodoList/>
          <GIFComponent />
      </div>
    );
  };

export default connect()(App);
