import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Pages } from './pages';

import { Main } from './components/main/Main';
import './components/style/__variables.scss';

class App extends Component {
  state = {
    user: null
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <>
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
