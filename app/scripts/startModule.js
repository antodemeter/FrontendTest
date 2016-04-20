'use strict';

define('startModule', ['jquery','easyAutocomplete'], function($) {

  var $suggestion = $('#suggestion'),
      root        = 'https://www.prontopro.it',
      maxElements = 100;

  var ajaxCall = function( url ) {
    $.getJSON( url , function( data ) {
        console.log(data);
    });
  };

  var options = {

    url: root+'/work-with-us/dev/fe/test/autocomplete',

    getValue: function(element) {
        return element.label;
    },

    list: {
        match: {
          enabled: true
        },
        maxNumberOfElements: maxElements,
        onSelectItemEvent: function() {
            var url = $suggestion.getSelectedItemData().url;
            ajaxCall( root + url );
        }
    }
  };

  return {
    init: function() {
      $suggestion.easyAutocomplete(options);
    }
  };

});
