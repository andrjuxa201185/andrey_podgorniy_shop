import { Component } from 'react';
import './images.scss';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';

export class Images extends Component {
  state = {}

  render() {
    return (
      <div className="images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    );
  }
}
