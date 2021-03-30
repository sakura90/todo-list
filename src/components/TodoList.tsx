import React from 'react';
import TodoListItem from './TodoListItem';
import './../types/types.d.ts';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

function TodoList(p : Props) {
  return (
    <ul>
      {p.todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={p.toggleTodo} />
      ))}
    </ul>
  );  
}

export default TodoList;
