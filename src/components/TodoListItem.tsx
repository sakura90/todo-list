import React from 'react';
import './../types/types.d.ts';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

function TodoListItem(p : Props) {
    return (
      <li>
        <label
          style={{ textDecoration: p.todo.complete ? 'line-through' : undefined }}
        >
          <input type="checkbox" checked={p.todo.complete} onClick={() => {
            p.toggleTodo(p.todo);
          }}
          /> {p.todo.text}
        </label>
      </li>
    );      
}

export default TodoListItem;