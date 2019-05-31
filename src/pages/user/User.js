/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
// import { useState, useEffect } from 'react';
import { Form } from '../../components/form';
import './user.scss';

export const UserComponent = ({ user }) => {
  // const [userInfo, setUserInfo] = useState(user);
  // useEffect(() => {
  //   setUserInfo(user);
  // }, [user]);
  // return (
  //   <form className="form">
  //     <input type="text" value={userInfo.email} readOnly />
  //     <input type="text" defaultValue={userInfo.firstName} />
  //     <input type="text" defaultValue={userInfo.lastName} />
  //     <input type="password" placeholder="PASSWORD" />
  //     <input type="password" placeholder="REPEAT PASSWORD" />
  //     <button className="sbt" type="submit">SAVE</button>
  //   </form>
  // );

  return (
    <>
      <h1>Update user</h1>
      <Form
        disabledFields={['email']}
        skipped={['password']}
        data={user}
      />
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export const User = connect(mapStateToProps)(UserComponent);
