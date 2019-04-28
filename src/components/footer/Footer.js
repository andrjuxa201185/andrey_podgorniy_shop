import { ListUsers } from '../listUsers/ListUsers';
import { PostsUser } from '../postsUser/PostsUser';
import './footer.scss';

export class Footer extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      users: [],
      posts: []
    };
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({ users }));
  }

  getPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(data => data.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { users, posts } = this.state;

    return (
      <footer className="footer footer_appearence">
        <div>
          <h2>List of users:</h2>
          <ListUsers users={users} click={this.getPosts} />
        </div>
        <PostsUser posts={posts} />
      </footer>
    );
  }
}
