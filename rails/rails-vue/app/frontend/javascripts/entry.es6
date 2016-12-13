import hello from './hello';
import Vue from 'vue';

var _ = require('lodash');

var count = 4;

_.times(count, function(i) {
  console.log(i);
});

window.addEventListener('load', function () {
  new Vue({
    el: '#example',
    data: {
      message: 'hi there'
    },
    components: {
      hello
    }
  });
});
