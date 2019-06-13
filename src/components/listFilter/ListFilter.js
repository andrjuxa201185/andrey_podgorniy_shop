import { useState } from 'react';
import './listFilter.scss';

export const ListFilter = ({
  items,
  onDounleClick
}) => {
  const [filterWord, setFilterWord] = useState('');

  const filter = ({ target }) => {
    setFilterWord(target.value);
  };

  return (
    <div className="list-filter">
      <input className="input-filter" type="text" placeholder="Search" onChange={filter} />
      <ul>
        {
        items.filter(({ title = '' }) => title.toLowerCase().includes(filterWord.toLowerCase()))
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
