'use strict';

define('startModule', ['jquery','easyAutocomplete','ajax'], function($, EasyAutocomplete, Ajax) {

  var $suggestion = $('#suggestion'),
      root        = 'https://www.prontopro.it',
      maxElements = 100;

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
        onClickEvent: function() {
            var url = $suggestion.getSelectedItemData().url;
            Ajax.parseAndPrintSuggestion( root + url );
        }
    }
  };

  return {
    init: function() {
      $suggestion.easyAutocomplete(options);
    }
  };

});
