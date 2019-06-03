import { Link } from 'react-router-dom';

export const CategoriesUnpublished = ({
  items,
  onDounleClick
}) => (
  <ul className="categories-list">
    {
      items.map(({ title, id }) => (
        <li
          key={id}
          onDoubleClick={onDounleClick}
        >
          <Link to={`/categories/${id}`}>
            {title}
          </Link>
        </li>
      ))
      }
  </ul>
);
