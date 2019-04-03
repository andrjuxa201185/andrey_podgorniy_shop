const $ = require('jquery')

module.exports = (tag = 'div', content = '', className = 'box') => {
    return $(`<${tag}/>`, {
        class: className,
        html: content
    });
};
