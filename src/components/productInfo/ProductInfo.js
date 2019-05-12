/* eslint-disable arrow-body-style */
import { EditableField } from '../editableField';
import './productInfo.scss';

// eslint-disable-next-line padded-blocks
export const ProductInfo = () => {

  return (
    <div className="productinfo">

      <div className="title">
        <span>Title:</span>
        <EditableField type="text" />
      </div>

      <div className="price">
        <span>$:</span>
        <EditableField type="number" />
      </div>

      <div className="description">
        <span>Description:</span>
        <EditableField type="text" />
      </div>

      <button>SAVE</button>
    </div>
  );
};
