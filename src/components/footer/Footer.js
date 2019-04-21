import './footer.scss';

const users = [
  {
    firstName: 'Ivan', lastName: 'Ivanov', age: 23, id: 2353
  },
  {
    firstName: 'Petr', lastName: 'Petrov', age: 45, id: 657
  },
  {
    firstName: 'Pavel', lastName: 'Pavlov', age: 35, id: 8709
  },
];

const User = ({
  firstName, lastName, age, id
}) => (
  <li key={id}>
    {firstName}
    {' '}
    {lastName}
    {' '}
    {age}
  </li>
);

const ListUsers = ({ users }) => (
  <ul>
    {
      users.map(({
        firstName, lastName, age, id
      }) => (
        <User firstName={firstName} lastName={lastName} age={age} id={id} key={id} />
      ))
    }
  </ul>
);

export const Footer = () => (
  <footer className="footer footer_appearence">
    <ListUsers users={users} />
  </footer>
);
