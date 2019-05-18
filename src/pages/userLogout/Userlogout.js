import { Route, Switch, Redirect } from 'react-router-dom';

import { Login } from '../login';
// import { Usercabinet } from '../usercabinet';
import { Category } from '../category';

export const Userlogout = ({ onLogin, user }) => (
  <Switch>
    <Route
      path="/login"
      render={props => <Login onLogin={onLogin} user={user} {...props} />}
    />
    {/* <Route
      path="/categories"
      exact
      component={() => <Usercabinet user={user} />}
    /> */}
    <Route
      path="/categories/:id"
      exact
      component={Category}
    />
    <Redirect to="/login" />
  </Switch>
);
