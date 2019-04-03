const builder = require('./builder');

module.exports = () => {
    const content = '<p>Easy Code 2019</p>';
    
    return builder('footer', content, 'footer');
};
 