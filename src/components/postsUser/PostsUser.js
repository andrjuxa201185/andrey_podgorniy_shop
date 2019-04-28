import './postsUser.scss';

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
