import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCategoryAsync, updateCategoryAsync } from '../../store/categories';
import { setProductsAsync } from '../../store/products';
import { ListFilter } from '../../components/listFilter';
import { ListEdit } from '../../components/listEdit';
import './category.scss';

export const CategoryComponent = ({
  match, dispatch, category, products, user, prodAdded, history
}) => {
  const [categoryState, setCategoryState] = useState({ products: [] });
  const newCategory = match.params.id === 'new';

  useEffect(() => {
    !newCategory && dispatch(setCategoryAsync(match.params.id));
    dispatch(setProductsAsync());
  }, []);

  const addProduct = (idProduct) => {
    const product = products.find(item => item.id === idProduct);

    if (newCategory) {
      const arr = categoryState.products;
      arr.push({ id: product.id, title: product.title });

      setCategoryState({ ...categoryState, products: arr });
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

  const clickHandler = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="category">
      <h2>Category {category.title}</h2>
      {
        user && (
        <div className="title-columns">
          <span>Products added</span>
          <span>Products</span>
        </div>
        )}
      <div className="columns">
        <ListEdit
          items={newCategory ? categoryState.products : prodAdded}
          hideEdit
          hideDel={!user}
          onDelete={delProduct}
          onClickHandler={clickHandler}
        />
        {
          user && (
          <ListFilter
            items={setNotAddedProduct(newCategory ? categoryState.products : prodAdded)}
            onDounleClick={addProduct}
          />
          )
        }
      </div>
      { newCategory && <button className="btn">Save</button> }
    </div>
  );
};

const mapStateToProps = state => ({
  category: state.category,
  prodAdded: state.category.products || [],
  products: state.products,
  user: state.user.data,
});

export const Category = connect(mapStateToProps)(CategoryComponent);
