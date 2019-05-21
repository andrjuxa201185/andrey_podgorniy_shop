import { Route, Switch, Redirect } from 'react-router-dom';

import { Login } from './login';
import { Home } from './home';
import { Category } from './category';

export const Public = ({ onLogin, user, isLoading }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={Home}
    />
    <Route
      path="/login"
      render={props => <Login onLogin={onLogin} user={user} isLoading={isLoading} {...props} />}
    />
    <Route
      path="/categories/:id"
      exact
      component={Category}
    />
    <Redirect to="/login" />
  </Switch>
);
