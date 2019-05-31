/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { createUserService } from '../../services/userService';
import { Form } from '../../components/form';
import './newuser.scss';

const NewUserComponent = () => {
  // const [newuserInfo, setNewUserInfo] = useState({});
  // createUserService();
  // const createUser = (e) => {
  //   e.preventDefault();
  //   return true;
  // };
  // return (
  //   <form className="form" onSubmit={createUser}>
  //     <input type="text" />
  //     <input type="text" />
  //     <input type="text" />
  //     <input type="password" placeholder="PASSWORD" />
  //     <input type="password" placeholder="REPEAT PASSWORD" />
  //     <button className="sbt" type="submit">SAVE</button>
  //   </form>
  // );

  return (
    <>
      <h1>Update user</h1>
      <Form
        skipped={['password']}
      />
    </>
  );
};

export const NewUser = connect()(NewUserComponent);
