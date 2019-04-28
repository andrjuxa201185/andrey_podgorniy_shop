const User = ({
  id, name, email, onClick
}) => (
  <li key={id} onClick={() => onClick(id)}>
    {name + email}
  </li>
);

export const ListUsers = ({ users, click }) => (
  <ul>
    {
      users.map(({
        id, name, email
      }) => (
        <User id={id} name={name} email={email} key={id} onClick={click} />
      ))
    }
  </ul>
);
