import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { setCategory } from '../../store/categories';
import { getCategoryService } from '../../services/categoriesService';
import './category.scss';

export const CategoryComponent = ({ match, dispatch }) => {
  const [categoryState, setCategoryState] = useState({});

  useEffect(() => {
    getCategoryService(match.params.id)
      .then((respCategory) => {
        setCategoryState(respCategory);
        dispatch(setCategory(respCategory));
      });

    return () => dispatch(setCategory(null));
  }, []);

  return (
    <div className="category">
      <h2>{categoryState.title}</h2>
      <ul>
        {
          categoryState.products
            ? categoryState.products.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))
            : (<li>No products</li>)
        }
      </ul>
    </div>
  );
};

export const Category = connect()(CategoryComponent);
