/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import { updateUserAsync } from '../../store/user';
// import { useState, useEffect } from 'react';
import { Form } from '../../components/form';
import './user.scss';

export const UserComponent = ({
  dispatch, history, user
}) => {
  const handleSubmit = (info) => {
    const callback = () => history.push('/success');
    dispatch(updateUserAsync({ info, callback }));
  };

  return (
    <>
      <h1>Update user</h1>
      <Form
        data={user}
        disabledFields={['email']}
        ignored={['password']}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user.data,
  status: state.user.status
});

export const User = connect(mapStateToProps)(UserComponent);
