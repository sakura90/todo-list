import React from 'react';
import './App.css';
import TodoListItem from './components/TodoListItem';

const todos = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <TodoListItem todo={todos[0]} />
          <TodoListItem todo={todos[1]} />
        </ul>
      </div>
    );    
  }
}

export default App;
