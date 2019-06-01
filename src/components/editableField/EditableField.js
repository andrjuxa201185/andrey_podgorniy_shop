/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-autofocus */
import { useState, useEffect } from 'react';
import './editableField.scss';

export const EditableField = ({
  type = 'text',
  val = '',
  editState = false,
  notOnClick = false,
  onBlurHandler = null
}) => {
  const [isHidden, setIsHidden] = useState(editState);
  const [value, setValue] = useState(val);

  useEffect(() => {
    setIsHidden(editState);
  }, [editState]);

  useEffect(() => {
    setValue(val);
  }, [val]);

  const changeField = ({ target }) => {
    setValue(target.value);
  };

  const changeHidden = () => {
    setIsHidden(!isHidden);

    if (onBlurHandler) {
      onBlurHandler(value);
    }
  };

  const whatInput = type => (type === 'textarea' ? (
    <textarea
      autoFocus
      cols="26"
      rows="2"
      value={value}
      onChange={changeField}
      onBlur={changeHidden}
    >{value}
    </textarea>
  ) : (
    <input
      autoFocus
      type={type}
      value={value}
      onChange={changeField}
      onBlur={changeHidden}
    />
  ));

  return (
    <div className="editablefield">
      { isHidden
        ? whatInput(type)
        : notOnClick
          ? <span>{value}</span>
          : <span onClick={changeHidden}>{value}</span>
      }
    </div>
  );
};
