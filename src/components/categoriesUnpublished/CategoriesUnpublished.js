import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CategoriesUnpublished = ({
  items,
  onDounleClick
}) => {
  const [filterWord, setFilterWord] = useState('');

  const filter = ({ target }) => {
    setFilterWord(target.value);
  };

  return (
    <div className="unpublished">
      <input type="text" placeholder="Search" onChange={filter} />
      <ul>
        {
        items.filter(({ title }) => title.includes(filterWord))
          .map(({ title, id }) => (
            <li key={id} onDoubleClick={onDounleClick}>
              <Link to={`/categories/${id}`}>
                {title}
              </Link>
            </li>
          ))
      }
      </ul>
    </div>
  );
};
