import { Component } from 'react';
import './form.scss';

export class Form extends Component {
  fields = [
    { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
    { label: 'name', reg: /^[^ ]{3,20}$/ },
    { label: 'surname', reg: /^[^ ]{3,20}$/ },
    { label: 'password', reg: /^[^ ]{6,20}$/, secure: true }
  ];

  state = this.fields.reduce((acc, item) => ({ ...acc, [item.label]: { value: '', error: '' } }), {});

  changeField = ({ target }) => {
    const value = Object.prototype.hasOwnProperty.call(target, 'checked') ? target.checked : target.value;

    this.setState({ [target.name]: { value, error: '' } });
  }

  validateField = (index) => {
    const field = this.fields[index];
    // eslint-disable-next-line react/destructuring-assignment
    const stateField = this.state[field.label];

    if (stateField.value.length === 0) {
      this.setState({
        [field.label]: { ...stateField, error: 'This field is required' }
      });

      return;
    }

    if (!field.reg.test(stateField.value)) {
      this.setState({
        [field.label]: { ...stateField, error: 'This field is wrong' }
      });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    window.console.log(this.state);
  }

  getDisabledState() {
    return Object.values(this.state).some(state => !state.value || state.error);
  }

  render() {
    const { disabledFields = [] } = this.props;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Class work 19</legend>
          {
            this.fields.map(({ label, secure }, index) => {
              // eslint-disable-next-line react/destructuring-assignment
              const state = this.state[label];

              return (
                <p key={label}>
                  <input
                    type={secure ? 'password' : 'text'}
                    name={label}
                    placeholder={`Enter a ${label}`}
                    value={state.value}
                    onChange={this.changeField}
                    onBlur={() => this.validateField(index)}
                    className={state.error ? 'error' : 'correct'}
                    disabled={disabledFields.includes(label)}
                  />
                  {state.error && <mark>{state.error}</mark>}
                </p>
              );
            })
          }
          <input type="submit" value="Save" disabled={this.getDisabledState()} />
        </fieldset>
      </form>
    );
  }

  // state = {
  //   name: '',
  //   age: undefined,
  //   role: '',
  //   gender: true,
  // }

  // roles = ['', 'Admin', 'Guest', 'Unknown'];

  // render() {
  //   const {
  //     name, age, role, gender
  //   } = this.state;

  //   return (
  //     <form action="">
  //       <input
  //         type="text"
  //         name="name"
  //         value={name}
  //         onChange={this.changeField}
  //       />

  //       <input
  //         type="text"
  //         name="age"
  //         value={age}
  //         onChange={this.changeField}
  //       />

  //       <select
  //         name="role"
  //         value={role}
  //         onChange={this.changeField}
  //       >
  //         {
  //           ['', ...this.roles.map(role => <option key={role} value={role}>{role}</option>)]
  //         }
  //       </select>

  //       <input
  //         type="checkbox"
  //         name="gender"
  //         checked={gender}
  //         onChange={this.changeField}
  //       />

  //       <p>{name.toUpperCase()}{age}{role}</p>
  //     </form>
  //   );
  // }
}
