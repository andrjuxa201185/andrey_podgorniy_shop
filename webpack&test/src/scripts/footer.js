import { builder } from './builder';
import './footer.scss';

const footer = () => {
    const content = '<p>Easy Code 2019</p>';
    
    return builder('footer', content, 'footer width6');
};
 
export { footer };