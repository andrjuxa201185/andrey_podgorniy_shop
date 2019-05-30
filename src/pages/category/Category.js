import { useState, useEffect } from 'react';
import { getCategoryService } from '../../services/categoriesService';
import './category.scss';


export const Category = ({ match }) => {
  const [category, setCategory] = useState({});

  useEffect(() => {
    getCategoryService(match.params.id)
      .then(setCategory);
  }, []);

  return (
    <div className="category">
      <h2>{category.title}</h2>
      <ul>
        {
          category.products
            ? category.products.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))
            : (<li>No products</li>)
        }
      </ul>
    </div>
  );
};
