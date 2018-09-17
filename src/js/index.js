import $ from 'jquery';

global.$ = global.jQuery = $;

import 'popper.js';

import 'bootstrap';

//import * as Vue from 'vue';

//import '../vue/loading.vue';

let headinglass = false;

$('.wrapper__main').scroll(function() {
    var show = $('.wrapper__main').scrollTop() >= 200;
    if(show) {
        if(!headinglass) {
            $('.wrapper').addClass('no-heading-picture');
            headinglass = true;
        }
    } else {
        if(headinglass) {
            $('.wrapper').removeClass('no-heading-picture');
            headinglass = false;
        }
    }
});