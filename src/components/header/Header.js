import './header.scss';
import { Navigation } from '../navigation/Navigation';
import { Counter } from '../counter/Counter';

export class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <header className="header header_appearance">
        <h1>{user}</h1>
        <Counter />
        <Navigation />
      </header>
    );
  }
}
