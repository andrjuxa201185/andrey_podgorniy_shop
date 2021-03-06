import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {
  setCategoriesAsync,
  updateCategoryAsync,
} from '../../store/categories';
import { ListEdit } from '../../components/listEdit';
import { ListFilter } from '../../components/listFilter';
import './categories.scss';

export const CategoriesComponent = ({
  categories, user, dispatch, history
}) => {
  useEffect(() => {
    dispatch(setCategoriesAsync());
  }, []);

  const changePublished = (id) => {
    const category = categories.find(item => item.id === id);
    category.published = !category.published;
    dispatch(updateCategoryAsync({ id: category.id, category }));
  };

  const clickHandler = (id) => {
    history.push(`/categories/${id}`);
  };

  const blurHandler = (id, value) => {
    const category = categories.find(item => item.id === id);
    category.title = value;
    dispatch(updateCategoryAsync({ id: category.id, category }));
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
        <ListEdit
          dispatch={dispatch}
          items={categories.filter(({ published }) => published)}
          hideEdit={!user}
          hideDel={!user}
          onDelete={changePublished}
          history={history}
          onClickHandler={clickHandler}
          onBlurHandler={blurHandler}
        />
        {
          user && (
          <ListFilter
            items={categories.filter(({ published }) => !published)}
            onDounleClick={changePublished}
          />
          )
        }
      </div>
      {user && <Link to="/categories/new" className="btn">New</Link>}
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.categories,
  user: state.user.data
});

export const Categories = connect(mapStateToProps)(CategoriesComponent);
