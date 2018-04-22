import React from 'react';
import TodoList from '../container/TodoList';
import AddTodo from '../container/AddTodo';
import GIFComponent from './GIFComponent';

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

export default App;
