const $ = require('jquery')

module.exports = (tag = 'div', content = '', className = 'box') => {
    const element = $(`<${tag}/>`, {
        "class": className,
        html: content
    });

    return element;
};
