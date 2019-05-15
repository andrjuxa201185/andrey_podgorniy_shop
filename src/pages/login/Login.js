/* eslint-disable no-console */

export const Login = ({ onLogin }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    setTimeout(() => {
      onLogin(data);
    }, 1000);
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        name="email"
        required
        defaultValue="admin.com"
      /><br />

      <input
        type="password"
        name="password"
        required
        defaultValue="admin"
      /><br />

      <input type="submit" value="Login" />
    </form>
  );
};
