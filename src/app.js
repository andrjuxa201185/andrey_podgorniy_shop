import React from 'react';
import ReactDom from 'react-dom';

import { Main } from './components/main/Main';
import { Tasklist } from './components/tasklist';
import { Usercabinet } from './components/usercabinet';
import './components/style/__variables.scss';

const App = () => (
  <>
    <Main />
    <Tasklist />
    <Usercabinet
      name="John"
      numCategories={10}
      numPublished={3}
      numProducts={5}
    />
  </>
);

ReactDom.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
