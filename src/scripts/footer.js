const builder = require('./builder');
require('./footer.css');

module.exports = () => {
    const content = '<p>Easy Code 2019</p>';
    
    return builder('footer', content, 'footer');
};
 