import { Component } from 'react';
import './todo.scss';

export class Todo extends Component {
  state = {
    todos: [],
  }

  getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(data => data.json())
      .then(posts => this.setState({ todos: posts }));
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="todo">
        <h3>ToDo</h3>
        <ul>
          {
            todos.map(({ title, completed, id }) => (
              <li
                key={id}
              >
                <span className={completed ? 'completed' : ''}>{title}</span>
                {
                  !completed && (
                  <div>
                    <span>X</span>
                    <span>V</span>
                    <span>~</span>
                  </div>
                  )
                }
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
