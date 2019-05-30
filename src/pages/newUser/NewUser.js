import { connect } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { createUserService } from '../../services/userService';
import './newuser.scss';

const NewUserComponent = () => {
  // const [newuserInfo, setNewUserInfo] = useState({});

  // createUserService();

  const createUser = (e) => {
    e.preventDefault();
    return true;
  };

  return (
    <form className="form" onSubmit={createUser}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="password" placeholder="PASSWORD" />
      <input type="password" placeholder="REPEAT PASSWORD" />
      <button className="sbt" type="submit">SAVE</button>
    </form>
  );
};

export const NewUser = connect()(NewUserComponent);
