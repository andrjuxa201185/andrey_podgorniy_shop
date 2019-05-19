import { Route, Switch, Redirect } from 'react-router-dom';
import { Notfound } from './notfound';

import { HomeAuth } from './homeAuth';
import { Categories } from './categories';
import { Category } from './category';
import { User } from './user';

export const Private = ({ user }) => (
  <Switch>
    <Route
      path="/"
      exact
      render={() => <HomeAuth user={user} />}
    />
    <Route
      path="/user"
      exact
      render={() => <User user={user} />}
    />
    <Route
      path="/categories"
      exact
      render={Categories}
    />
    <Route
      path="/categories/:id"
      exact
      render={Category}
    />
    <Redirect
      from="/login"
      to="/"
    />
    <Route
      render={({ location }) => <Notfound location={location} />}
    />
  </Switch>
);
