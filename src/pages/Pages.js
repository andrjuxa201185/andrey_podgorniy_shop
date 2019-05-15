/* eslint-disable padded-blocks */
import { Route, Switch, Link } from 'react-router-dom';

import { Users } from './users';
import { Login } from './login';

// eslint-disable-next-line arrow-body-style
export const Pages = ({ onLogin }) => {

  return (
    <Switch>
      <Route
        path="/"
        exact
        component={() => <Link to="/login">link</Link>}
      />
      <Route
        path="/users"
        component={Users}
      />
      <Route
        path="/login"
        component={() => <Login onLogin={onLogin} />}
      />
    </Switch>
  );
};
