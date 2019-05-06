import React from 'react';
import ReactDom from 'react-dom';

import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { Tasklist } from './components/tasklist/Tasklist';
import { Usercabinet } from './components/usercabinet/Usercabinet';
import './components/style/__variables.scss';

const App = () => (
  <>
    <Header user="aaaaaaa" />
    <Main />
    <Tasklist />
    <Usercabinet
      name="John"
      numCategories={10}
      numPublished={3}
      numProducts={5}
    />
    <Footer />
  </>
);

ReactDom.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
