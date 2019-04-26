import './show.scss';

export class Show extends Component {
  state = {
    btnText: 'Show',
    show: ''
  }

  showContent = () => {
    const { btnText, show } = this.state;

    this.setState({
      btnText: !btnText,
      show: !show
    });
  }

  render() {
    const { show, btnText } = this.state;
    return (
      <div className="b-show">
        <button onClick={this.showContent}>{btnText ? 'Show' : 'Hide'}</button>
        <div className={`content ${show ? 'show-content' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
      </div>
    );
  }
}
