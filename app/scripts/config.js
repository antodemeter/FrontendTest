;;

(function() {

  'use strict';

  requirejs.config({
    baseUrl: '/scripts',
    waitSeconds: 0,
    paths: {
      // Vendor libs loaded by bower
      jquery            : '../../bower_components/jquery/dist/jquery.min',
      semantic          : '../../bower_components/semantic/dist/semantic.min',
      easyAutocomplete  : '../../bower_components/EasyAutocomplete/dist/jquery.easy-autocomplete.min',
      Mustache          : '../../bower_components/mustache.js/mustache.min',
      text              : '../../bower_components/text/text',
      stache            : '../../bower_components/requirejs-mustache/stache'
    },
    shim: {
      jquery: {
        exports: '$'
      },
      easyAutocomplete: {
        exports: 'EasyAutocomplete'
      }
    }
  });

})();
