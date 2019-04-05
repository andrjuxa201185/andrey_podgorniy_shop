import { builder } from './builder';
import './header.css';

const header = () => {
    const content = '<h2>Header</h2>';

    return builder('header', content, 'header');
};

export { header };


 