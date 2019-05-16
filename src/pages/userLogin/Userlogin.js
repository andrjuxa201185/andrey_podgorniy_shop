import { Route, Switch, Redirect } from 'react-router-dom';

export const Userlogin = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={() => <h2>path/</h2>}
    />
    <Redirect
      from="/login"
      to="/"
    />
    <Route
      render={({ location }) => <h1>Requested url <mark>{location.pathname}</mark> not found</h1>}
    />
  </Switch>
);
