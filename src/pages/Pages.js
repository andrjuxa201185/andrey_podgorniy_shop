import { connect } from 'react-redux';

import { Route, Switch } from 'react-router-dom';

import { Notfound } from './notfound';
import { Private } from './Private';
import { Public } from './Public';
import { Categories } from './categories';
import { Category } from './category';
import { Product } from './product';

export const PagesComponent = ({ user }) => (
  <Switch>
    <Route
      path="/categories"
      component={Categories}
      exact
    />

    <Route
      path="/categories/:id"
      component={Category}
    />

    <Route
      path="/products/:id"
      component={Product}
    />

    {
      user ? Private : Public
    }

    <Route
      render={({ location }) => <Notfound location={location} />}
    />
  </Switch>
);

const mapState = state => ({ user: state.user });

export const Pages = connect(mapState)(PagesComponent);
