import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
  setCategoriesAsync,
  updateCategoryAsync,
} from '../../store/categories';
import { CategoriesPublished } from '../../components/categoriesPublished';
import { CategoriesUnpublished } from '../../components/categoriesUnpublished';
import './categories.scss';

export const CategoriesComponent = ({ categories, user, dispatch }) => {
  useEffect(() => {
    dispatch(setCategoriesAsync());
  }, []);

  const changePublished = (id) => {
    const category = categories.find(item => item.id === id);
    category.published = !category.published;
    dispatch(updateCategoryAsync(category));
  };

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
        <CategoriesPublished
          items={categories.filter(({ published }) => published)}
          hideEdit={!user}
          onDelete={changePublished}
        />
        {
          user && (
          <CategoriesUnpublished
            items={categories.filter(({ published }) => !published)}
            onDounleClick={changePublished}
          />
          )
        }
      </div>
      {user && <button>ADD NEW</button>}
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.categories,
  user: state.user.data
});

export const Categories = connect(mapStateToProps)(CategoriesComponent);
