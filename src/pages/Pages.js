import { Route, Switch, Redirect } from 'react-router-dom';

// import { HomeAuth } from './homeAuth';
import { Usercabinet } from './usercabinet';
import { Login } from './login';

export const Pages = ({ onLogin, user }) => (
  user
    ? (
      <Switch>
        <Route
          path="/"
          exact
          component={Usercabinet}
        />
        <Redirect
          from="/login"
          to="/"
        />
        <Route
          render={({ location }) => <h1>Requested url <mark>{location.pathname}</mark> not found</h1>}
        />
      </Switch>
    )
    : (
      <Switch>
        <Route
          path="/"
          exact
          component={Usercabinet}
        />
        <Route
          path="/login"
          render={props => <Login onLogin={onLogin} {...props} />}
        />
        <Route
          render={({ location }) => <h1>Requested url <mark>{location.pathname}</mark> not found</h1>}
        />
      </Switch>
    )
);
