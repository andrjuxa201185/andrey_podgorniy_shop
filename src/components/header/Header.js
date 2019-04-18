import React from 'react';
import './header.scss';
import { Navigation } from '../navigation/Navigation';

export const Header = () => (
  <header className="header header_appearance">
    <h1 className="header__title">Header</h1>
    <Navigation />
  </header>
)
