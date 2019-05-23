import { useState, useEffect } from 'react';
import { getCategoriesService } from '../../services/categoriesService';
import './categories.scss';

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesService()
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
