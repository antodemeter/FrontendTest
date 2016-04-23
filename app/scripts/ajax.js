'use strict';

define('ajax', ['jquery', 'template'], function($, Template) {

  return {
    parseAndPrintSuggestion: function( url ) {

      $.getJSON(url, function( data ) {
          Template.printData( data );
      });

    },

    init: function() {
      console.log('ajax init');
    }
  };

});
