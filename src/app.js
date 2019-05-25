/* eslint-disable import/named */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */

import React from 'react';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

// import { checkUserService } from './services/userService';

// import { Header } from './components/header';
// import { Pages } from './pages';
// import { Main } from './components/main/Main';
// import { Loader } from './components/loader';
import { store } from './store';
// import './main.scss';

import { App } from './appComponent';


const RouteApp = withRouter(App);

const Root = (
  <Provider store={store}>
    <Router>
      <RouteApp />
    </Router>
  </Provider>
);

ReactDom.render(Root, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
