import './button.scss';

export class Button extends Component {
  constructor(prop) {
    super(prop);
    
    this.state = {
      classes: 'button'
    }
  }


  toggleClass() {
    
  }

  render() {
    return (
      <button className={this.state.classes} onClick={this.toggleClass}>Click me</button>
    );
  }
}
