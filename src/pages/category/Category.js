export const Category = ({ match }) => (
  <>
    <h1>Category</h1>
    <strong>{match.params.id}</strong>
  </>
);
