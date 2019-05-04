const User = ({
  id, name, email, onClick
}) => (
  <li key={id} onClick={() => onClick(id)}>
    {name + email}
  </li>
);

const RenderPosts = ({ posts }) => posts.map(({ id, title, body }) => (
  <li key={id}><h3>{title}</h3><p>{body}</p></li>
));

export const PostsUser = ({ posts }) => {
  if (posts[0]) {
    return (
      <div className="posts-user">
        <h2>Posts:</h2>
        <ol>
          <RenderPosts posts={posts} />
        </ol>
      </div>
    );
  }

  return null;
};

export const ListUsers = ({ users, click }) => (
  <ul>
    {
      users.map(({
        id, name, email
      }) => (
        <User id={id} name={name} email={email} key={id} onClick={click} />
      ))
    }
  </ul>
);
