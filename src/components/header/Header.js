import './header.scss';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';

export const Header = ({ user, onLogout }) => (
  <header className="header">
    <Link to="/" className="header-logo">HOME</Link>

    <Navigation user={user} onLogout={onLogout} />
    {
      user
        ? (
          <div>
            <mark>{user.email}</mark>
            <button onClick={onLogout}>Logout</button>
          </div>
        )
        : <Link to="/login">Sign in</Link>
    }
  </header>
);
