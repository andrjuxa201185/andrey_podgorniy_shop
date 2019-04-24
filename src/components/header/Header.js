import './header.scss';
import { Navigation } from '../navigation/Navigation';
import { Button } from '../button/Button';

export const Header = () => (
  <header className="header header_appearance">
    <h1>Header</h1>
    <Button />
    <Navigation />
  </header>
);
