;;

requirejs(['config'], function() {

    'use strict';

    requirejs([
        'startModule',
        'ajax',
        'template'
    ], function()
    {
        for ( var i in arguments ) {
            arguments[i].init();
        }
    });

});
