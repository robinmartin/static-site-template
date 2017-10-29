try {
    window.$ = window.jQuery = require('jquery');
    window.Popper = require('popper.js/dist/umd/popper');
    require('bootstrap');
} catch (e) {}

// window.axios = require('axios');
//
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//
// window.Vue = require('vue/dist/vue.common');

// var app = new Vue({
//     el: '#app',
//     data: {
//
//     },
//
// })