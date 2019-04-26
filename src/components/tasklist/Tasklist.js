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
    const {
      userName, tasks, doneTasks, progressTasks, waitingTasks
    } = this.state;

    return (
      <div className="tasklist">
        <h3>Hello, {userName}</h3>
        <p>You have {tasks} tasks</p>
        <p>Done: {doneTasks}</p>
        <p>In progress: {progressTasks}</p>
        <p>Waiting: {waitingTasks}</p>
        <a href="/">Go to the task list</a>
      </div>
    );
  }
}
