import { ListUsers } from '../listUsers/ListUsers';
import './footer.scss';

export class Footer extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      users: []
    };
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({ users }));
  }

  render() {
    const { users } = this.state;

    return (
      <footer className="footer footer_appearence">
        <h2>List of users:</h2>
        <ListUsers users={users} />
      </footer>
    );
  }
}
