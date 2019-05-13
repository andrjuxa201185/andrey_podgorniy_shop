import { useState, useEffect } from 'react';
import './users.scss';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(setUsers);
  }, []);

  return (
    <ul className="users">
      {
        users.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))
      }
    </ul>
  );
};
