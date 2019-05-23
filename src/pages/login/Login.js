/* eslint-disable no-console */
// import { useState, useEffect } from 'react';
import { Loader } from '../../components/loader';
import { loginUserService } from '../../services/userService';

export const Login = ({ onLogin, user, isLoading }) => {
  // const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   setLoader(false);
  // }, [user]);

  const onSubmit = (e) => {
    // setLoader(true);
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    loginUserService(data)
      .then(onLogin);
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
      {isLoading && <Loader />}
    </>
  );
};
