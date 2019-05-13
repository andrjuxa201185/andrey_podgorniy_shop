import './todolist.scss';

const RenderTodoList = ({ title, done, id }) => (
  <li
    key={id}
  >
    <span className={done ? 'completed' : ''}>{title}</span>
    {
      !done && (
      <div>
        <span>X</span>
        <span>V</span>
        <span>~</span>
      </div>
      )
    }
  </li>
);

export const Todolist = ({ list }) => (
  <ul className="todolist">
    {
      list.map(({ title, done, id }) => (
        <RenderTodoList
          key={id}
          title={title}
          done={done}
          id={id}
        />
      ))
    }
  </ul>
);
