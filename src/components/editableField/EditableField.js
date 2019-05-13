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

  const whatInput = type => (type === 'textarea' ? (
    <textarea
      cols="26"
      rows="5"
      value={value}
      onChange={changeField}
      onBlur={changeHidden}
    >{value}
    </textarea>
  ) : (
    <input
      type={type}
      value={value}
      onChange={changeField}
      onBlur={changeHidden}
    />
  ));

  return (
    <div className="editablefield">
      { isHidden ? whatInput(type) : (
        <span
          onClick={changeHidden}
        >{value}
        </span>
      )
      }
    </div>
  );
};
