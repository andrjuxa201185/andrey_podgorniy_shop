import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setCategoryAsync, setCategory, updateCategoryAsync } from '../../store/categories';
import { setProductsAsync } from '../../store/products';
import { CategoriesUnpublished } from '../../components/categoriesUnpublished';
import { CategoriesPublished } from '../../components/categoriesPublished';
import './category.scss';

export const CategoryComponent = ({
  match, dispatch, category, products, prodInCategory
}) => {
  useEffect(() => {
    dispatch(setCategoryAsync(match.params.id));
    dispatch(setProductsAsync());
  }, []);

  const addProduct = (idProduct) => {
    const product = products.find(item => item.id === idProduct);
    if (!prodInCategory) {
      category.products = [];
    }
    prodInCategory.push({ id: product.id, title: product.title });
    dispatch(updateCategoryAsync({ id: match.params.id, category }));
  };

  const delProduct = (id) => {
    category.products = category.products.filter(prod => prod.id !== id);
    dispatch(updateCategoryAsync({ id: match.params.id, category }));
  };

  return (
    <div className="category">
      <h2>Category {category.title}</h2>
      <div className="title-columns">
        <span>Products added</span>
        <span>Products</span>
      </div>
      <div className="columns">
        <CategoriesPublished
          items={prodInCategory || []}
          hideEdit
          onDelete={delProduct}
        />
        <CategoriesUnpublished
          items={products}
          onDounleClick={addProduct}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  category: state.category,
  prodInCategory: state.category.products,
  products: state.products
});

export const Category = connect(mapStateToProps)(CategoryComponent);
