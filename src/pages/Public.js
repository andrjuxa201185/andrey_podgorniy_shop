import { Route } from 'react-router-dom';

import { Home } from './home';
import { Login } from './login';
import { NewUser } from './newUser';
import { Categories } from './categories';

export const Public = [
  <Route
    path="/"
    exact
    component={Home}
    key="home"
  />,

  <Route
    path="/login"
    component={Login}
    key="login"
  />,

  <Route
    path="/newuser"
    component={NewUser}
    key="newuser"
  />,

  <Route
    path="/success"
    render={() => (<div>grrdf</div>)}
    key="newuser"
  />,

  <Route
    path="/categories"
    component={Categories}
    key="categories"
  />
];
