const User = ({
  id, name, email
}) => (
  <li key={id}>
    {name + email}
  </li>
);

export const ListUsers = ({ users }) => (
  <ul>
    {
      users.map(({
        id, name, email
      }) => (
        <User id={id} name={name} email={email} key={id} />
      ))
    }
  </ul>
);
