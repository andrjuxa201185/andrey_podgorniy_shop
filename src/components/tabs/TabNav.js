import './tabs.scss';

export const TabNav = ({ list, select, id }) => {
  const onClick = (e, index) => {
    select(index);
    e.preventDefault();
  };

  return (
    <nav className="nav-tab">
      <ul>{list.map((title, index) => (
        <li
          className={index === id ? 'active' : ''}
          key={index}
        >
          <a
            href="/"
            onClick={e => onClick(e, index)}
          >
            {title}
          </a>
        </li>
      ))}
      </ul>
    </nav>
  );
};
