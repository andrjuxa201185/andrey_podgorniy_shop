import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  setCategoryAsync,
  updateCategoryAsync,
  createCategoryAsync,
} from '../../store/categories';
import { setProductsAsync } from '../../store/products';
import { ListFilter } from '../../components/listFilter';
import { ListEdit } from '../../components/listEdit';
import { EditableField } from '../../components/editableField';
import './category.scss';

export const CategoryComponent = ({
  match, dispatch, category, products, user, prodAdded, history
}) => {
  const [categoryState, setCategoryState] = useState({ products: [] });
  const isNewCategory = match.params.id === 'new';
  const items = isNewCategory ? categoryState.products : prodAdded;

  useEffect(() => {
    !isNewCategory && dispatch(setCategoryAsync(match.params.id));
    dispatch(setProductsAsync());
  }, []);

  const addProduct = (idProduct) => {
    const product = products.find(item => item.id === idProduct);

    if (isNewCategory) {
      categoryState.products.push({ id: product.id, title: product.title });

      setCategoryState({ ...categoryState });
      return;
    }

    if (!category.products) {
      category.products = [];
    }
    category.products.push({ id: product.id, title: product.title });
    dispatch(updateCategoryAsync({ id: match.params.id, category }));
  };

  const delProduct = (id) => {
    category.products = category.products.filter(prod => prod.id !== id);
    dispatch(updateCategoryAsync({ id: match.params.id, category }));
  };

  const setNotAddedProduct = prodInCategory => products.filter((prod) => {
    for (let i = 0; i < prodInCategory.length; i++) {
      if (prod.id === prodInCategory[i].id) return false;
    }

    return true;
  });

  const historyProdPush = (id) => {
    history.push(`/products/${id}`);
  };

  const saveNewCategory = () => {
    const callback = id => history.push(`/categories/${id}`);
    dispatch(createCategoryAsync({ category: categoryState, callback }));
  };

  return (
    <div className="category">
      {!isNewCategory
        ? <h2 className="title">Category {category.title}</h2>
        : (
          <EditableField
            onBlurHandler={title => setCategoryState({ ...categoryState, title })}
            val={categoryState.title || 'New Category'}
          />
        )
      }
      {
        user && (
        <div className="title-columns">
          <span>Products added</span>
          <span>Products</span>
        </div>
        )}
      <div className="columns">
        <ListEdit
          items={items}
          hideEdit
          hideDel={!user}
          onDelete={delProduct}
          onClickHandler={historyProdPush}
        />
        {
          user && (
          <ListFilter
            items={setNotAddedProduct(items)}
            onDounleClick={addProduct}
          />
          )
        }
      </div>
      { isNewCategory && <button className="btn" onClick={saveNewCategory}>Save</button> }
    </div>
  );
};

const mapStateToProps = state => ({
  category: state.category || {},
  prodAdded: state.category ? state.category.products : [],
  products: state.products,
  user: state.user.data,
});

export const Category = connect(mapStateToProps)(CategoryComponent);
