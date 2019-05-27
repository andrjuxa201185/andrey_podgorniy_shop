import { connect } from 'react-redux';
import './header.scss';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';
import { checkUserService } from '../../services/userService';
import { removeUser } from '../../store/user';

export const HeaderComponent = ({ user, dispatch }) => {
  const onLogout = () => dispatch(removeUser());

  const logoutHandler = (e) => {
    e.preventDefault();
    checkUserService()
      .then(() => onLogout(null));
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo" title="home"><img src="./images/logo.png" alt="" /></Link>

      <Navigation user={user} onLogout={onLogout} />
      {
        user
          ? (
            <div className="user-info">
              <span>{user.firstName}</span>
              <Link to="/user">Profile</Link>
              <a
                href="/"
                onClick={logoutHandler}
              >Logout
              </a>
            </div>
          )
          : <Link to="/login">Sign in</Link>
      }
    </header>
  );
};

const mapToProps = state => ({
  user: state.user
});

export const Header = connect(mapToProps)(HeaderComponent);
