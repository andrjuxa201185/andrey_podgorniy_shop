import { Component } from 'react';
import './images.scss';

export class Images extends Component {
  state = {}

  render() {
    return (
      <div className="images">
        <img src="./images/img1.png" alt="" />
        <img src="./images/img2.png" alt="" />
        <img src="./images/img3.png" alt="" />
      </div>
    );
  }
}
