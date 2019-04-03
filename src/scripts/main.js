const builder = require('./builder');

module.exports = () => {
    const content = '<a href="#">GO TO MAIN ==></a>';

    return builder('main', content, 'main');
};


 