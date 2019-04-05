const builder = require('./builder');
require('./header.css');

module.exports = () => {
    const content = '<h2>Header</h2>';

    return builder('header', content, 'header');
};


 