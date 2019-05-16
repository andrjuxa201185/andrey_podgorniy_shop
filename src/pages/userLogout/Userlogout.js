import { Route, Switch } from 'react-router-dom';

import { Login } from '../login';


export const Userlogout = ({ onLogin }) => (
  <Switch>
    <Route
      path="/"
      exact
      component={props => <Login onLogin={onLogin} {...props} />}
    />
    <Route
      path="/login"
      render={props => <Login onLogin={onLogin} {...props} />}
    />
    <Route
      render={({ location }) => <h1>Requested url <mark>{location.pathname}</mark> not found</h1>}
    />
  </Switch>
);
