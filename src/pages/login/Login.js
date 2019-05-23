/* eslint-disable no-console */
import { useState } from 'react';
import { Loader } from '../../components/loader';
import { loginUserService } from '../../services/userService';
import './login.scss';

export const Login = ({ onLogin }) => {
  const [loading, setLoadState] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    setLoadState(true);

    loginUserService(data)
      .then((user) => {
        setLoadState(false);
        onLogin(user);
      });
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
