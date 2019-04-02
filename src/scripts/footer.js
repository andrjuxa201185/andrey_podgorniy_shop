const builder = require('./builder');

module.exports = () => {
    const content = '<a href="/">footer</a>';
    
    return builder('footer', content, 'footer');
};
 