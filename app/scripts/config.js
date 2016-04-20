;;

(function() {

    'use strict';

    requirejs.config({
        baseUrl: '/scripts',
        waitSeconds: 0,
        paths: {
            // Vendor libs loaded by bower
            jquery            : '../../bower_components/jquery/dist/jquery.min',
            easyAutocomplete  : '../../bower_components/EasyAutocomplete/dist/jquery.easy-autocomplete.min'
        },
        shim: {
            jquery: {
                exports: '$'
            }
        }
    });

})();
