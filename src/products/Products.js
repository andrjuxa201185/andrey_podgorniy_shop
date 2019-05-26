import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EditableField } from '../../components/editableField';
import { getProductsService } from '../../services/productService';
import './products.scss';
import { setProducts } from '../../store/products';

export const ProductsComponent = ({ products, dispatch }) => {
  useEffect(() => {
    getProductsService()
      .then(products => dispatch(setProducts(products)));
  }, []);

  return (
    <div>
      <h3>Products</h3>
      <ul className="products">
        {
          products.map(({ title, id, image }) => (
            <li key={id} className="product">
              <div className="description">
                <div className="setting">
                  <span>edit</span>
                  <span>X</span>
                </div>
                <Link to={`/products/${id}`} className="img"><img src={image || './images/bag.png'} alt="" /></Link>
              </div>
              <EditableField type="textarea" val={title} />
            </li>
          ))
        }
      </ul>
      <button>ADD NEW</button>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products
});

export const Products = connect(mapStateToProps)(ProductsComponent);
