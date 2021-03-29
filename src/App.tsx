import React, { useState } from 'react';
import './App.css';
import './types/types.d.ts';
import TodoListItem from './components/TodoListItem';

const todos : Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
    let [helperTodos, setHelperTodos] = useState(todos);

    let toggleTodo = (selectedTodo: Todo) => {
      const newTodos = helperTodos.map((todo : Todo) => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
      setHelperTodos(newTodos);
    };
    return (
      <div>
        <ul>
          <TodoListItem todo={helperTodos[0]} toggleTodo={toggleTodo} />
          <TodoListItem todo={helperTodos[1]} toggleTodo={toggleTodo} />
        </ul>
      </div>
    );    
  
}

export default App;
