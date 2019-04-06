import { builder } from './builder';
import './main.scss';

const main = () => {
    const date = new Date();
    const content = `<h2>This is Main! Now: ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}</h2>`;

    return builder('main', content, 'main');
};

export { main };


 