import { Component } from 'react';
import './showTime.scss';

const Greeting = ({ name }) => {
  const now = new Date().getHours();
  let text = 'Hello';

  if (now >= 22 || now < 3) {
    text = 'Good night';
  }
  if (now >= 3 && now < 12) {
    text = 'Good morning';
  }
  if (now >= 12 && now < 18) {
    text = 'Good afternoon';
  }
  if (now >= 18 && now < 22) {
    text = 'Good evening';
  }

  return (<p>{text}{name && `, ${name}`}!</p>);
};

export class ShowTime extends Component {
  state = {
    now: new Date()
  };

  getTime() {
    this.int = setInterval(() => {
      this.setState({
        now: new Date()
      });
    }, 1000);
  }

  componentDidMount() {
    this.getTime();
  }

  componentWillUnmount() {
    clearInterval(this.int);
  }

  render() {
    const { name } = this.props;
    const { now } = this.state;
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    return (
      <>
        <Greeting name={name} />
        <span>{date}</span><br />
        <span>{time}</span>
      </>
    );
  }
}
