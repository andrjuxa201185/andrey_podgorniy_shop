import { server } from '../../services';
import './categories.scss';

export class Categories extends Component {
  state = {
    categories: []
  }

  componentDidMount = () => {
    server.get('public/products')
      .then(console.log);
  }

  render() {
    const categories = this.state;

    return (
      <div className="categories">
        <ul>
          {/* {
            categories.map(({ title, id }) => (
              <li key={id}>{title}</li>
            ))
          } */}
          thd
        </ul>
      </div>
    );
  }
}
