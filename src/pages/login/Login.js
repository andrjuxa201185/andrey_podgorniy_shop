import { connect } from 'react-redux';
import { Loader } from '../../components/loader';
import { loginUserAsync } from '../../store/user';
import './login.scss';

export const LoginComponent = ({ dispatch, status }) => {
  // const [loading, setLoadState] = useState(false);
  // const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // setLoadState(true);
    dispatch(loginUserAsync(data));
    // setLoadState(status);
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
      <Loader shown={status} />
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user.data,
  status: state.user.status
});

export const Login = connect(mapStateToProps)(LoginComponent);
