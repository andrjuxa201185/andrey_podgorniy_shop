// import { useState } from 'react';
import './user.scss';

export const User = ({ user }) => {
  // const [userInfo, setUserInfo] = useState(user);
  const { email, firstName, lastName } = user;


  return (
    <form className="form">
      <input type="text" value={email} readOnly />
      <input type="text" value={firstName} />
      <input type="text" value={lastName} />
      <input type="text" placeholder="PASSWORD" />
      <input type="text" placeholder="REPEAT PASSWORD" />
      <button className="sbt" type="submit">SAVE</button>
    </form>
  );
};
