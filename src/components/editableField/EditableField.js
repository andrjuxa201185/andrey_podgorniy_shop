import { useState } from 'react';
import './editableField.scss';

export const EditableField = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [value, setValue] = useState('');

  const changeField = ({ target }) => {
    setValue(target.value);
  };

  const changeHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="editablefield">
      { isHidden ? (
        <input
          type="text"
          placeholder="input value..."
          value={value}
          onChange={changeField}
          onBlur={changeHidden}
        />
      ) : (
        <span
          onClick={changeHidden}
        >{value}
        </span>
      )
      }
    </div>
  );
};


// export class EditableField extends Component {
//   state = {
//     isHidden: true,
//     value: '',
//   }

//   changeField = ({ target }) => {
//     this.setState({ value: target.value });
//   }

//   changeHidden = () => {
//     const { isHidden, value } = this.state;
//     const { fn } = this.props;
//     if (fn) {
//       fn(value);
//     }
//     this.setState({ isHidden: !isHidden });
//   }
// }
