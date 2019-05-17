import { Route, Switch, Redirect } from 'react-router-dom';
import { Notfound } from '../notfound';
import { Usercabinet } from '../usercabinet';


export const Userlogin = () => (
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
      render={({ location }) => <Notfound location={location} />}
    />
  </Switch>
);
