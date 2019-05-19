/* eslint-disable padded-blocks */
import './user.scss';

export const User = ({ user }) => {

  const { email, firstName, lastName } = user;
  return (
    <div className="user">
      <ul className="user">
        <li key={email}>{email}</li>
        <li key={firstName}>{firstName}</li>
        <li key={lastName}>{lastName}</li>
        <li key="password">password</li>
        <li key="passwordAgain">password again</li>
      </ul>
      <button>SAVE</button>
    </div>
  );
};
