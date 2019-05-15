/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './task.scss';

export const Task = () => {
  const [name, setName] = useState('userName');
  const [tasks, setTask] = useState(10);
  const [doneTasks, setDoneTasks] = useState(3);
  const [progressTasks, setProgressTasks] = useState(5);
  const [waitingTasks, setWaitingTasks] = useState(1);

  return (
    <div className="task">
      <h3>Hello, {name}</h3>
      <p>You have {tasks} tasks</p>
      <p>Done: {doneTasks}</p>
      <p>In progress: {progressTasks}</p>
      <p>Waiting: {waitingTasks}</p>
      <a href="/">Go to the task list</a>
    </div>
  );
};
