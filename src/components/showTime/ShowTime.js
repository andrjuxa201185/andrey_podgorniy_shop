import { Component } from 'react';
import './showTime.scss';

export class ShowTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date()
    };
    this.getTime();
  }

  getTime() {
    this.int = setInterval(() => {
      this.setState({
        now: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.int);
  }

  render() {
    const { now } = this.state;
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return (
      <>
        <span>{date}</span><br />
        <span>{time}</span>
      </>
    );
  }
}
