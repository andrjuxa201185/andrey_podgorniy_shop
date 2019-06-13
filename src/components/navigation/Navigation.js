/* eslint-disable object-curly-newline */
import { NavLink, Link } from 'react-router-dom';
import {
  FaHouzz,
  FaAlignJustify,
  FaShoppingBag,
  FaMapSigns,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa';
import { useState } from 'react';
import './navigation.scss';
import { server } from '../../services';

const items = [
  { label: 'Home', id: '', Icon: FaHouzz, auth: false },
  { label: 'Home', id: '', Icon: FaHouzz, auth: true },
  { label: 'Shop', id: 'categories', Icon: FaAlignJustify, auth: false },
  { label: 'Categories', id: 'categories', Icon: FaAlignJustify, auth: true },
  { label: 'Products', id: 'products', Icon: FaShoppingBag, auth: true },
  { label: 'Contacts', id: 'contacts', Icon: FaMapSigns }
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
                  <item.Icon />
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
                <Link to="/login">Sign in<FaSignInAlt /></Link>
                /
                <a href="/newuser">Sign up<FaUserPlus /></a>
              </>
            )
        }
      </div>
    </nav>
  );
};
