const builder = require('./builder');

module.exports = () => {
    const content = '<h2>Header</h2>';

    return builder('header', content, 'header');
};


 