import { Button } from '../../components/button';

// eslint-disable-next-line arrow-body-style
export const Home = ({ history }) => {
  return (
    <div className="home">
      <h1>home</h1>
      <button
        onClick={() => history.push('/categories')}
      >GO to categories
      </button>
      <Button to="/categories" />
    </div>
  );
};
