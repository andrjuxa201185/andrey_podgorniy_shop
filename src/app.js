import React from 'react';
import ReactDom from 'react-dom';

import { Navigation } from './navigation/Navigation';

const Time = () => <time>{ new Date().toLocaleString() }</time>;
const header = (
  <header>
    <h1>hello <Time/></h1>
    <Navigation />
  </header>
)

ReactDom.render(header, document.getElementById('app'));