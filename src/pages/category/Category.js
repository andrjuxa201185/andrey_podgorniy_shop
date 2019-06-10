import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setCategoryAsync, updateCategoryAsync } from '../../store/categories';
import { setProductsAsync } from '../../store/products';
import { ListFilter } from '../../components/listFilter';
import { ListEdit } from '../../components/listEdit';
import './category.scss';

export const CategoryComponent = ({
  match, dispatch, category, products, user, prodAdded
}) => {
  useEffect(() => {
    dispatch(setCategoryAsync(match.params.id));
    dispatch(setProductsAsync());
  }, []);

  const addProduct = (idProduct) => {
    const product = products.find(item => item.id === idProduct);
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

  const ProductNotAdded = () => products.filter((prod) => {
    for (let i = 0; i < prodAdded.length; i++) {
      if (prod.id === prodAdded[i].id) return false;
    }

    return true;
  });

  return (
    <div className="category">
      <h2>Category {category.title}</h2>
      <div className="title-columns">
        <span>Products added</span>
        <span>Products</span>
      </div>
      <div className="columns">
        <ListEdit
          items={prodAdded}
          hideEdit
          hideDel={!user}
          onDelete={delProduct}
        />
        <ListFilter
          items={ProductNotAdded()}
          onDounleClick={addProduct}
        />
      </div>
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
