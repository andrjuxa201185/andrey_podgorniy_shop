import './show.scss';

export class Show extends Component {
  state = {
    btnText: 'Show',
    show: ''
  }

  showContent = () => {
    const { btnText, show } = this.state;

    this.setState({
      btnText: btnText === 'Show' ? 'Hide' : 'Show',
      show: show === '' ? 'show-content' : ''
    });
  }

  render() {
    return (
      <div className="b-show">
        <button className={this.state.show} onClick={this.showContent}>{this.state.btnText}</button>
        <div className={`content ${this.state.show}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
      </div>
    );
  }
}
