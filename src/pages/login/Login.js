/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../../components/loader';
import { loginUserService } from '../../services/userService';
// import { setUser } from '../../store/user';
import { loginUserAsync } from '../../store/user';
import './login.scss';

export const LoginComponent = ({ dispatch }) => {
  const [loading, setLoadState] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    setLoadState(true);
    dispatch(loginUserAsync(data));
    // loginUserService(data)
    //   .then((user) => {
    //     setLoadState(false);
    //     dispatch(setUser(user));
    //   })
    //   .catch((err) => {
    //     setLoadState(false);
    //     setError(err);
    //   });
  };

  return (
    <>
      <form action="#" onSubmit={onSubmit} className="login">
        <input
          required
          type="text"
          name="email"
          defaultValue="admin@a.com"
        />

        <input
          required
          type="password"
          name="password"
          defaultValue="admin"
        />

        <button type="submit" value="Login">login</button>
      </form>
      <Loader shown={loading} />
    </>
  );
};

export const Login = connect()(LoginComponent);
