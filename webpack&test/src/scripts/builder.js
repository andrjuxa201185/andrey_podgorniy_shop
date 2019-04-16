import $ from 'jquery';

const builder = (tag = 'div', content = '', className = 'box') => {
    return $(`<${tag}/>`, {
        class: className,
        html: content
    });
};

export { builder };
