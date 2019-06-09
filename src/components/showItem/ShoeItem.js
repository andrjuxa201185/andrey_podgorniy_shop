// import { useEffect } from 'react';
import { EditableField } from '../EditableField';
// import { setProduct, setProductAsync, createProductAsync } from '../../store/products';

export const ShowItem = ({
  // match,
  // dispatch,
  // history,
  product
}) => {

  return (
    <div className="product-info">
      <h3>
        <EditableField
          val={product.title || 'New Product'}
        />
      </h3>

      <div className="price">
        Price:
        <span>
          <EditableField
            val={product.price || 0}
          />
        </span>
      </div>

      <div className="description">
        Description:
        <EditableField
          type="textarea"
          val={product.description}
        />
      </div>

      {
        // match.params.id === 'new' && <button onClick={saveNewProduct}>SAVE</button>
      }
    </div>
  );
};
