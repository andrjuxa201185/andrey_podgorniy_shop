import './counter.scss';

export class Counter extends Component {
  state = {
    counter: 0
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    });

    console.log(this.state.counter);
  }

  render() {
    const { counter } = this.state;

    return (
      <>
        <button
          className="counter"
          onClick={this.clickHandler}
          // onClick={(e) => this.clickHandler(e)}
        >

          Click
        </button>
        <span>{counter}</span>
      </>
    );
  }
}
