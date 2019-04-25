import './tasklist.scss';

export class Tasklist extends Component {
  state = {
    userName: 'userName',
    tasks: 10,
    doneTasks: 3,
    progressTasks: 5,
    waitingTasks: 1,
  }

  render() {
    return (
      <div className="tasklist">
        <h3>Hello, {this.state.userName}</h3>
        <p>You have {this.state.tasks} tasks</p>
        <p>Done: {this.state.doneTasks}</p>
        <p>In progress: {this.state.progressTasks}</p>
        <p>Waiting: {this.state.waitingTasks}</p>
        <a href="/">Go to the task list</a>
      </div>
    );
  }
}
