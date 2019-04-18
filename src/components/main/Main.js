import React from 'react';
import './main.scss';
import { Aside } from '../aside/Aside';
import { Content } from '../content/Content';

export const Main = () => (
  <main className="main main_appearence">
    <Aside/>
    <Content />
  </main>
)
