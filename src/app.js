import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/header';
import { Pages } from './pages';
import { Main } from './components/main/Main';


class App extends Component {
  state = {
    user: null
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  onLogout = () => {
    this.setState({ user: null });
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <Header user={user} onLogout={this.onLogout} />
        <Main>
          <Pages onLogin={this.onLogin} user={user} />
        </Main>
      </>
    );
  }
}

const Root = (
  <Router>
    <App />
  </Router>
);

ReactDom.render(Root, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
