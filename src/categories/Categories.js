import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getCategoriesService } from '../../services/categoriesService';
import { setCategories } from '../../store/categories';
import './categories.scss';

export const CategoriesComponent = ({ categories, dispatch }) => {
  useEffect(() => {
    getCategoriesService()
      .then(categories => dispatch(setCategories(categories)));
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

const mapStateToProps = state => ({
  categories: state.categories
});

export const Categories = connect(mapStateToProps)(CategoriesComponent);
