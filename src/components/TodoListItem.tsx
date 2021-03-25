import React, {Component} from 'react';

interface Todo {
  text: string;
  complete: boolean;
}

interface Props {
  todo: Todo;
}

class TodoListItem extends Component<Props> {
  render() {
    return (
      <li>
        <label
          style={{ textDecoration: this.props.todo.complete ? 'line-through' : undefined }}
        >
          <input type="checkbox" checked={this.props.todo.complete} /> {this.props.todo.text}
        </label>
      </li>
    );      
  }
}

export default TodoListItem;