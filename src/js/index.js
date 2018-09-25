let $ = require('jquery');
let jQuery = require('jquery');
global.$ = $;
global.jQuery = jQuery;

require('popper.js');

require('bootstrap');

require('jquery-slimscroll');

//import * as Vue from 'vue';

//import '../vue/loading.vue';

$('#main').slimScroll({
    height: '100%',
    size: '8px',
    alwaysVisible: true,
    allowPageScroll: false,
    disableFadeOut: false,
    railVisible: true,
    railOpacity: 0.15,
});

$('#news-primary .news__panel-body').slimScroll({
    height: '155px',
    width: '100%',
});

//Sidebar
$('li a', '#sidebar-area').on('click', function(e) {
    var li = $(this).closest('li');
    var submenu = li.find('ul');
    if(submenu.length > 0) {
        submenu.toggle('swing', function(e){
            $(li).toggleClass('active');
        });
    }
});