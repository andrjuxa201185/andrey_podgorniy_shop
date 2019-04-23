import { User } from '../user/User';

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
