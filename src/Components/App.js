import React from 'react';
import TodoList from '../container/TodoList';
import AddTodo from '../container/AddTodo';

const App = () => {
    return (
      <div>
          <h1>To-do List App</h1>
          <AddTodo />
          <TodoList />
      </div>
    );
  };

export default App;
