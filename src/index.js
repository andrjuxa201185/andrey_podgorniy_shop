const $ = require('jquery');

const header = require('./scripts/header')();
const footer = require('./scripts/footer')();

$('body').append(header, footer);