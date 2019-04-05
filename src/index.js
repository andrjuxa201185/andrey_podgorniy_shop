const $ = require('jquery');
require('./app.scss');

const header = require('./scripts/header')();
const footer = require('./scripts/footer')();
const main = require('./scripts/main')();

$('body').append(header, main, footer);