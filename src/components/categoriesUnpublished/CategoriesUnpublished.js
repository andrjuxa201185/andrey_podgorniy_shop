import { useState, useEffect } from 'react';

export const CategoriesUnpublished = ({
  items,
  onDounleClick
}) => {
  const [filterWord, setFilterWord] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(items);
  }, [items]);

  const filter = ({ target }) => {
    setFilterWord(target.value);
  };

  return (
    <div className="unpublished">
      <input type="text" placeholder="Search" onChange={filter} />
      <ul>
        {
        list.filter(({ title }) => title.includes(filterWord))
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
