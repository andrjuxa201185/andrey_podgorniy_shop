import $ from 'jquery';
import './app.scss';

import { header } from './scripts/header';
// import { footer } from './scripts/footer';
import { main } from './scripts/main';

$('body').append(header(), main());

// $('h1').one('click', () => {
    // import('./scripts/footer')
    //     .then(module => {
    //         $('body').append(module.footer());
    //     });
// });

if (module.hot) {
    module.hot.accept();
}