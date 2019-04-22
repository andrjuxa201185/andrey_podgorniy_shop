import { ListUsers } from '../listUsers/ListUsers';
import './footer.scss';

const users = [
  {
    firstName: 'Ivan', lastName: 'Ivanov', age: 23
  },
  {
    firstName: 'Petr', lastName: 'Petrov', age: 45
  },
  {
    firstName: 'Pavel', lastName: 'Pavlov', age: 35
  },
];

export const Footer = () => (
  <footer className="footer footer_appearence">
    <ListUsers users={users} />
  </footer>
);
