import React from 'react';
import ReactDom from 'react-dom';

import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

ReactDom.render(<App />, document.getElementById('app'));
