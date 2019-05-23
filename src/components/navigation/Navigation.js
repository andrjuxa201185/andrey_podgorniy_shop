/* eslint-disable object-curly-newline */

import { NavLink } from 'react-router-dom';

import './navigation.scss';
// import { server } from '../../services';

const items = [
  { label: 'Home', id: '', icon: 'home', auth: false },
  { label: 'Home', id: '', icon: 'home', auth: true },
  { label: 'Shop', id: 'categories', icon: 'list-alt', auth: false },
  { label: 'Categories', id: 'categories', icon: 'list-alt', auth: true },
  { label: 'Products', id: 'products', icon: 'shopping-bag', auth: true },
  { label: 'Contacts', id: 'contacts', icon: 'map-signs' }
];

// const [isLogout, setLogoutState] = React.useState(false);


export const Navigation = ({ user }) => {
  let filteredItems = items.filter(item => !item.auth);
  // const amount = info ? ` (${info.categories}/${info.products})` : '';

  // const logoutHandler = (e) => {
  //   e.preventDefault();
  //   server.get('logout')
  //     .then(() => {
  //       setLogoutState(true);
  //       onLogout(null);
  //     });
  // };

  if (user) {
    filteredItems = items.filter(item => item.auth);
  }

  return (
    <nav className="main-nav">
      <ul>
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
    </nav>
  );
};
