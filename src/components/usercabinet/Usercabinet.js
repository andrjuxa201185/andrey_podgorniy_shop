import { Component } from 'react';
import './usercabinet.scss';

// eslint-disable-next-line react/prefer-stateless-function
export class Usercabinet extends Component {
  render() {
    const {
      name, numCategories, numPublished, numProducts
    } = this.props;

    return (
      <div className="usercabinet">
        <p>Hello, {name}</p>
        <p>You have {numCategories} categories ({numPublished} published)</p>
        <p>You have {numProducts} products</p>
        <a href="/">Go to categories</a>
      </div>
    );
  }
}