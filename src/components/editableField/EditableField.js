import { Component } from 'react';
import './editableField.scss';

export class EditableField extends Component {
  state = {
    isHidden: true,
    value: '',
  }

  changeField = ({ target }) => {
    this.setState({ value: target.value });
  }

  changeHidden = () => {
    const { isHidden, value } = this.state;
    const { fn } = this.props;
    if (fn) {
      fn(value);
    }
    this.setState({ isHidden: !isHidden });
  }

  render() {
    const { value, isHidden } = this.state;

    return (
      <div className="editable-field">
        <h3>EditableField</h3>
        { isHidden ? (
          <input
            type="text"
            placeholder="input value..."
            value={value}
            onChange={this.changeField}
            onBlur={this.changeHidden}
          />
        ) : (
          <span
            onClick={this.changeHidden}
          >{value}
          </span>
        )
        }
      </div>
    );
  }
}
