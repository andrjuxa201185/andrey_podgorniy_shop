import { Route, Switch, Redirect } from 'react-router-dom';
import { Notfound } from './notfound';

import { HomeAuth } from './homeAuth';
import { Categories } from './categories';
import { Category } from './category';
import { User } from './user';
import { Products } from './products';
import { Product } from './product';

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
      path="/products"
      exact
      component={Products}
    />
    <Route
      path="/products/:id"
      exact
      component={Product}
    />
    <Route
      path="/categories"
      exact
      component={Categories}
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
