import './button.scss';

export class Button extends Component {
  state = {
    isActive: false
  };

  toggleClass = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  }

  render() {
    const { isActive } = this.state;
    return (
      <button className={isActive ? 'active' : ''} onClick={this.toggleClass}>Active</button>
    );
  }
}
