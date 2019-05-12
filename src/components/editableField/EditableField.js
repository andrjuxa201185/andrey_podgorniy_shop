import { useState } from 'react';
import './editableField.scss';

export const EditableField = ({ type }) => {
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
          type={type}
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
