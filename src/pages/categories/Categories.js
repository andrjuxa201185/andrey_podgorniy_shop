import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategoriesService } from '../../services/categoriesService';
import { setCategories } from '../../store/categories';
import { CategoriesPublished } from '../../components/categoriesPublished';
import './categories.scss';

export const CategoriesComponent = ({ categories, user, dispatch }) => {
  const [filterWord, setFilterWord] = useState('');

  useEffect(() => {
    getCategoriesService()
      .then(resp => dispatch(setCategories(resp)));
  }, []);

  const filter = ({ target }) => {
    setFilterWord(target.value);
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
        <CategoriesPublished items={categories.filter(({ published }) => published)} />
        {
          user && (
            <div className="unpublished">
              <input type="text" placeholder="Search" onChange={filter} />
              <ul>
                {
                categories.filter(({ title }) => title.includes(filterWord))
                  .map(({ title, id }) => (
                    <li key={id}><Link to={`/categories/${id}`}>{title}</Link></li>
                  ))
              }
              </ul>
            </div>
          )
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
