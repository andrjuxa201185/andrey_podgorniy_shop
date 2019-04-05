import { builder } from './builder';
import './footer.css';

const footer = () => {
    const content = '<p>Easy Code 2019</p>';
    
    return builder('footer', content, 'footer');
};
 
export { footer };