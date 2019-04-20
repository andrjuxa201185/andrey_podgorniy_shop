import './navigation.scss';

const list = ['Home', 'Products', 'Contacts'];

const Nav = ({ list }) => (
  <ul>
    {list.map((item, i) => (
      <li key={i}>
        <a href={`./${item.toLowerCase()}`}>{item}</a>
      </li>
    ))}
  </ul>
);

export const Navigation = () => (
  <nav className="nav nav_appearance">
    <Nav list={list} />
  </nav>
);
