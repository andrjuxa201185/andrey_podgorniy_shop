/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import { checkUserService } from './services/userService';

import { Header } from './components/header';
import { Pages } from './pages';
import { Main } from './components/main/Main';
import './main.scss';

import { Loader } from './components/loader';


class App extends Component {
  state = {
    user: null,
    isLoading: false
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate(prevProp, prevState) {
    const { user } = this.state;

    if (prevState.user && !user) {
      this.props.history.push('/');
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  onLogout = () => {
    this.setState({ user: null });
  }

  checkUser() {
    checkUserService()
      .then((user) => {
        this.onLogin(user);
        this.setState({ isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: true });
      });
  }

  render() {
    const { user, isLoading } = this.state;

    return (
      <>
        <Header user={user} onLogout={this.onLogout} />
        <Main>
          <Loader shown={isLoading} />
          {
            !isLoading && <Pages onLogin={this.onLogin} user={user} />
          }
        </Main>
      </>
    );
  }
}
const RouteApp = withRouter(App);

const Root = (
  <Router>
    <RouteApp />
  </Router>
);

ReactDom.render(Root, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
