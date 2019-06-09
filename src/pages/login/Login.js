import { connect } from 'react-redux';
import { Loader } from '../../components/loader';
import { loginUserAsync } from '../../store/user';
import './login.scss';

export const LoginComponent = ({ dispatch, status }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(loginUserAsync(data));
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
      <Loader shown={status.loading} />
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user.data,
  status: state.user.status
});

export const Login = connect(mapStateToProps)(LoginComponent);
