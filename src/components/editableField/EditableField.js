import { Component } from 'react';
import './editableField.scss';

export class EditableField extends Component {
  state = {
    isHidden: true,
    value: 'input value...',
  }

  changeField = ({ target }) => {
    this.setState({ value: target.value });
  }

  changeHidden = () => {
    const { isHidden, value } = this.state;
    const { fn } = this.props;
    fn && fn(value);
    this.setState({ isHidden: !isHidden });
  }

  render() {
    const { value, isHidden } = this.state;

    return (
      <div className="editable-field">
        <h3>EditableField</h3>
        <input
          className={isHidden ? 'hidden' : 'show'}
          type="text"
          value={value}
          onChange={this.changeField}
          onBlur={this.changeHidden}
        />
        <span
          className={isHidden ? 'show' : 'hidden'}
          onClick={this.changeHidden}
        >{value}
        </span>
      </div>
    );
  }
}
