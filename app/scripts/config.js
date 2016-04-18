;;

/**
 * RequireJS config object.
 *
 * @author Sopra Steria
 *
 * @see	http://requirejs.org/
 */

(function() {

    'use strict';

    requirejs.config({
        baseUrl: '/scripts',
        waitSeconds: 0,
        paths: {
            // Vendor libs loaded by bower
            jquery : '../../bower_components/jquery/dist/jquery.min',

            // custom modules
        },
        shim: {
            jquery: {
                exports: '$'
            }
        }
    });

})();
