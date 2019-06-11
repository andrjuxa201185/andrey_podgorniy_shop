import { useState, useEffect } from 'react';
import './listFilter.scss';

export const ListFilter = ({
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
    <div className="list-filter">
      <input className="input-filter" type="text" placeholder="Search" onChange={filter} />
      <ul>
        {
        list.filter(({ title }) => title.toLowerCase().includes(filterWord.toLowerCase()))
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
