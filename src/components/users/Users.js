// import { Component } from 'react';
import { useState, useEffect } from 'react';
import './users.scss';

// export class Users extends Component {
//   state = {
//     users: []
//   }

//   getUsers = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(resp => resp.json())
//       .then(users => this.setState({ users }));
//   }

//   componentDidMount() {
//     this.getUsers();
//   }

//   render() {
//     const { users } = this.state;

//     return (
//       <ul className="users">
//         {
//           users.map(({ name, id }) => (
//             <li key={id}>{name}</li>
//           ))
//         }
//       </ul>
//     );
//   }
// }

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
