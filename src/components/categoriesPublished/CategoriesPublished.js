import { Link } from 'react-router-dom';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

export const CategoriesPublished = ({
  items,
  onEdit,
  onDelete,
  hideEdit
}) => (
  <ul className="categories-list">
    {
      items.map(({ title, id }) => (
        <li
          key={id}
        >
          <Link to={`/categories/${id}`}>
            {title}
          </Link>
          {!hideEdit && <FaEdit onClick={onEdit} />}
          <FaRegTrashAlt onClick={onDelete} />
        </li>
      ))
      }
  </ul>
);
