import './header.scss';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';
import { server } from '../../services';

export const Header = ({ user, onLogout }) => {
  const logoutHandler = (e) => {
    e.preventDefault();
    server.get('logout').then(() => onLogout(null));
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo" title="home"><img src="./images/logo.png" alt="" /></Link>

      <Navigation user={user} onLogout={onLogout} />
      {
        user
          ? (
            <div className="user-info">
              <span>{user.email}</span>
              <Link
                to="/user"
              >Profile
              </Link>
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
