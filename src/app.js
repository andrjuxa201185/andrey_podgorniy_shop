import React from 'react';
import ReactDom from 'react-dom';

import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import './components/style/__variables.scss';

const names = ['1', '2', '3', '4'];
const render = names.map((name, i) => <li key={i}>{name}</li>);

const Nums = () => (
  <ul>
    {
      render
    }
  </ul>
);

const App = () => (
  <>
    <Header />
    <Main />
    <Nums />
    <Footer />
  </>
);

ReactDom.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
