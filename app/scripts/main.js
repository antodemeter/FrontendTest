;;

requirejs(['config'], function() {

    'use strict';

    requirejs([
        // modules here
    ], function()
    {
        for ( var i in arguments ) {
            arguments[i].load();
        }
    });

});
