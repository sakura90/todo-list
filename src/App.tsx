import React, { useState } from "react";
import "./App.css";
import "./types/types.d.ts";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import Grid from "@material-ui/core/Grid";

const todos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

function App() {
  let [helperTodos, setHelperTodos] = useState(todos);

  let toggleTodo = (selectedTodo: Todo) => {
    const newTodos = helperTodos.map((todo: Todo) => {
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

  const addTodo: AddTodo = (item: string) => {
    const newTodo = {
      text: item,
      complete: false,
    };
    setHelperTodos([...helperTodos, newTodo]);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <TodoList todos={helperTodos} toggleTodo={toggleTodo} />
      </Grid>
      <Grid item>
        <AddTodoForm addHandler={addTodo} />
      </Grid>
    </Grid>
  );
}

export default App;
