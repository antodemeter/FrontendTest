'use strict';

define('template', ['jquery','stache!../templates/suggestion'], function($, template) {
  var $suggestionContainer = $('#suggestionResults');

  return {
    printData: function( data ) {
      var obj = { list: data };
      console.log(obj);
      $suggestionContainer.empty().append( template( obj ) );
    },

    init: function() {
      console.log('template init');
    }
  };

});
