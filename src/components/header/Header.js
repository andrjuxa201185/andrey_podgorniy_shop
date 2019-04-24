import './header.scss';
import { Navigation } from '../navigation/Navigation';
import { Button } from '../button/Button';
import { Show } from '../show/Show';

export const Header = () => (
  <header className="header header_appearance">
    <h1>Header</h1>
    <Button />
    <Show />
    <Navigation />
  </header>
);
