import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setCategoriesAsync } from '../../store/categories';
import { CategoriesPublished } from '../../components/categoriesPublished';
import { CategoriesUnpublished } from '../../components/categoriesUnpublished';
import './categories.scss';

export const CategoriesComponent = ({ categories, user, dispatch }) => {
  useEffect(() => {
    dispatch(setCategoriesAsync());
  }, []);

  return (
    <div className="page-categories">
      <h3>Categories</h3>
      {
        user && (
          <div className="title-type-categories">
            <span>Published</span>
            <span>Unpublished</span>
          </div>
        )
      }
      <div className="categories">
        <CategoriesPublished items={categories.filter(({ published }) => published)} hideEdit={!user} />
        {
          user && <CategoriesUnpublished items={categories} />
        }
      </div>
      {user && <button>ADD NEW</button>}
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.categories,
  user: state.user
});

export const Categories = connect(mapStateToProps)(CategoriesComponent);
