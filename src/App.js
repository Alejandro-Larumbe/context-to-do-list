import React from 'react';
import TodoFormWithContext from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => (
  <div>
    <h1> To-do list</h1>
    <TodoFormWithContext />
    <TodoList />
  </div>
);

export default App;
