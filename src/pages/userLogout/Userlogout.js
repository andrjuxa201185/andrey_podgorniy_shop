import { Route, Switch, Redirect } from 'react-router-dom';

import { Login } from '../login';

export const Userlogout = ({ onLogin, user }) => (
  <Switch>
    <Route
      path="/login"
      render={props => <Login onLogin={onLogin} user={user} {...props} />}
    />
    <Redirect to="/login" />
  </Switch>
);
