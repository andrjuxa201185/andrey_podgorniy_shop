import './button.scss';

export class Button extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      classActive: ''
    };
  }

  toggleClass = () => {
    const { classActive } = this.state;
    this.setState({ classActive: classActive === 'active' ? '' : 'active' });
  }

  render() {
    return (
      <button className={this.state.classActive} onClick={this.toggleClass}>Active</button>
    );
  }
}
