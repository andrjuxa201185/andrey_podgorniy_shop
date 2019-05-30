import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getCategoriesService } from '../../services/categoriesService';
import { setCategories } from '../../store/categories';
import './categories.scss';

export const CategoriesComponent = ({ categories, dispatch }) => {
  useEffect(() => {
    getCategoriesService()
      .then(resp => dispatch(setCategories(resp)));
  }, []);

  return (
    <div className="page-categories">
      <h3>Categories</h3>
      <ul>
        {
          categories.map(({ title, id }) => (
            <li key={id}><Link to={`/categories/${id}`}>{title}</Link></li>
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
