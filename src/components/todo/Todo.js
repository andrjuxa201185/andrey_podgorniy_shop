import { Component } from 'react';
import './todo.scss';

export class Todo extends Component {
  state = {
    todos: [],
    filter: ''
  }

  getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(data => data.json())
      .then((posts) => {
        this.originTodos = posts;
        this.setState({ todos: this.originTodos });
      });
  }

  componentDidMount() {
    this.getPosts();
  }

  filterTodos = ({ target }) => {
    if (target.value.length > 1) {
      this.setState({
        todos: this.originTodos.filter(({ title }) => title.includes(target.value)),
        filter: target.value
      });
    } else {
      this.setState({ todos: this.originTodos, filter: target.value });
    }
  }

  render() {
    const { todos, filter } = this.state;

    return (
      <div className="todo">
        <h3>ToDo</h3>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.filterTodos}
          value={filter}
        />
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
