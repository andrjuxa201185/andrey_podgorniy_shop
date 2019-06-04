import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setCategory } from '../../store/categories';
import { getCategoryService } from '../../services/categoriesService';
import './category.scss';

export const CategoryComponent = ({ match, dispatch, category }) => {
  useEffect(() => {
    getCategoryService(match.params.id)
      .then((respCategory) => {
        dispatch(setCategory(respCategory));
      });

    return () => dispatch(setCategory({}));
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

const mapStateToProps = state => ({
  category: state.category
});

export const Category = connect(mapStateToProps)(CategoryComponent);
