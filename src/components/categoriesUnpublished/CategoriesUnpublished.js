import { useState } from 'react';

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
            <li key={id} onDoubleClick={() => onDounleClick(id)}>
              {title}
            </li>
          ))
      }
      </ul>
    </div>
  );
};
