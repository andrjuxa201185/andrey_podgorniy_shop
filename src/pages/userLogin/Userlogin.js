import { Route, Switch, Redirect } from 'react-router-dom';
import { Notfound } from '../notfound';
import { Usercabinet } from '../usercabinet';
import { Home } from '../home/Home';
import { Category } from '../category';


export const Userlogin = ({ user }) => (
  <Switch>
    <Route
      path="/"
      exact
      component={props => <Home {...props} />}
    />
    <Route
      path="/categories"
      exact
      component={() => <Usercabinet user={user} />}
    />
    <Route
      path="/categories/:id"
      exact
      component={Category}
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
