/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import './navigation.scss';
import { server } from '../../services';

const items = [
  { label: 'Home', id: '', icon: 'home', auth: false },
  { label: 'Home', id: '', icon: 'home', auth: true },
  { label: 'Shop', id: 'categories', icon: 'list-alt', auth: false },
  { label: 'Categories', id: 'categories', icon: 'list-alt', auth: true },
  { label: 'Products', id: 'products', icon: 'shopping-bag', auth: true },
  { label: 'Contacts', id: 'contacts', icon: 'map-signs' }
];

export const Navigation = ({ user, info, onLogout }) => {
  const [isShowUserMenu, setisShowUserMenu] = useState(false);

  let filteredItems = items.filter(item => !item.auth);
  const amount = info ? ` (${info.categories}/${info.products})` : '';

  const logoutHandler = (e) => {
    e.preventDefault();
    server.get('logout')
      .then(() => onLogout());
  };

  if (user) {
    filteredItems = items.filter(item => item.auth);
  }

  return (
    <nav className="main-nav">
      <ul className="main-nav__pages">
        {
          filteredItems
            .map(item => (
              <li
                key={item.id}
                className="item"
              >
                <NavLink
                  to={`/${item.id.toLowerCase()}`}
                  exact
                  activeClassName="active"
                >
                  {item.label}
                </NavLink>
              </li>
            ))
        }
      </ul>

      <div className="user-box">
        {
          user
            ? (
              <>
                <div onClick={() => setisShowUserMenu(!isShowUserMenu)}>
                  {user.firstName}
                  {amount}
                  {
                    isShowUserMenu && (
                      <ul>
                        <li><Link to="/user">Profile</Link></li>
                        <li>
                          <a href="/" onClick={logoutHandler}>Logout</a>
                        </li>
                      </ul>
                    )
                  }
                </div>

              </>
            )
            : (
              <>
                <Link to="/login">Sign in</Link>
                /
                <a href="/newuser">Sign up</a>
              </>
            )
        }
      </div>
    </nav>
  );
};
