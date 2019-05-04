import { Component } from 'react';
import './form.scss';

export class Form extends Component {
  // fields = [
  //   { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
  //   { label: 'name', reg: /^[^ ]{3,20}$/ },
  //   { label: 'surname', reg: /^[^ ]{3,20}$/ },
  //   { label: 'password', reg: /^[^ ]{6,20}$/, secure: true }
  // ];

  // state = this.fields.reduce((acc, item) => ({ ...acc, [item.label]: { value: '', error: '' } }), {});

  changeField = ({ target }) => {
    const value = target.hasOwnProperty('checked') ? target.checked : target.value;

    this.setState({ [target.name]: { value, error: '' } });
  }

  // validateField = ({ target }, index) => {
  //   const field = this.fields[index];
  //   const stateField = this.state[field.label];

  //   if (stateField.value.length === 0) {
  //     this.setState({
  //       [field.label]: { ...stateField, error: 'This field if wrong' }
  //     });
  //   }
  // }

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state);
  // }

  // getDisabledState() {
  //   return Object.values(this.state).some(state => !state.value || state.error);
  // }

  // render() {
  //   return (
  //     <form onSubmit={this.onSubmit}>
  //       {
  //         this.fields.map(({ label, secure }, index) => {
  //           // const sta
  //           return (
  //             <p key={label}>
  //               <input
  //                 type={secure ? 'password' : 'text'}
  //                 name={label}
  //                 placeholder={`Enter a ${label}`}
  //                 value={this.state[label].value}
  //                 onChange={this.changeField}
  //                 onBlur={e => this.validateField(e, index)}
  //                 className={this.state.error ? 'error' : 'correct'}
  //               />
  //               {this.state[label].error && <mark>strhnd</mark>}
  //             </p>
  //           );
  //         })
  //       }

  //       <input type="submit" disabled={this.getDisabledState} value="Save" />
  //     </form>
  //   );
  // }

  state = {
    name: '',
    age: undefined,
    role: '',
    gender: true,
  }

  roles = ['', 'Admin', 'Guest', 'Unknown'];

  render() {
    const {
      name, age, role, gender
    } = this.state;

    return (
      <form action="">
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.changeField}
        />

        <input
          type="text"
          name="age"
          value={age}
          onChange={this.changeField}
        />

        <select
          name="role"
          value={role}
          onChange={this.changeField}
        >
          {
            ['', ...this.roles.map(role => <option value={role}>{role}</option>)]
          }
        </select>

        <input
          type="checkbox"
          name="gender"
          checked={gender}
          onChange={this.changeField}
        />

        <p>{name.toUpperCase()}{age}</p>
      </form>
    );
  }
}
