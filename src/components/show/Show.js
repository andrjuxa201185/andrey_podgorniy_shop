import './show.scss';

export class Show extends Component {
  state = {
    btnShow: 'btn-show',
    show: 'show-content'
  }

  showContent(event) {
    event.target.textContent = 'Hide';
  }

  render() {
    return (
      <div className="b-show">
        <button className={this.state.btnShow} onClick={this.showContent}>Show</button>
        <div className={`content ${this.state.show}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
      </div>
    );
  }
}
