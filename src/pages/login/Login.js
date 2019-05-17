import { useState, useEffect } from 'react';
import { Loader } from '../../components/loader';

export const Login = ({ onLogin, user }) => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
  }, [user]);

  const onSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    fetch('http://localhost:8086/public/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then((user) => {
        onLogin(user);
      });
  };

  return (
    <>
      <form action="#" onSubmit={onSubmit}>
        <input
          required
          type="text"
          name="email"
          defaultValue="admin@a.com"
        />
        <br /><br />
        <input
          required
          type="password"
          name="password"
          defaultValue="admin"
        />
        <br /><br />

        <input type="submit" value="Login" />
      </form>
      {loader && <Loader />}
    </>
  );
};
