const User = ({
  firstName, lastName, age
}) => (
  <li>
    {firstName}
    {' '}
    {lastName}
    {' '}
    {age}
  </li>
);

export const ListUsers = ({ users }) => (
  <ul>
    {
      users.map(({
        firstName, lastName, age
      }) => (
        <User firstName={firstName} lastName={lastName} age={age} />
      ))
    }
  </ul>
);
