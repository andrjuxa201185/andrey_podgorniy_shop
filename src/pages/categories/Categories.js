import { useState, useEffect } from 'react';
import { server } from '../../services';
import './categories.scss';

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    server.get('public/categories')
      .then(setCategories);
  }, []);

  return (
    <div className="page-categories">
      <h3>Categories</h3>
      <ul>
        {
          categories.map(({ title, id }) => (
            <li key={id}>{title}</li>
          ))
        }
      </ul>
      <button>ADD NEW</button>
    </div>
  );
};
