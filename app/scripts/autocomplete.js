'use strict';

define('autocomplete', ['jquery'], function() { 

  var $suggestion = $('#suggestion');
  var options = {

    url: 'https://www.prontopro.it/work-with-us/dev/fe/test/autocomplete',

    getValue: function(element) {
        return element.label;
    },

    list: {
        onSelectItemEvent: function() {
            var selectedItemValue = $suggestion.getSelectedItemData().realName;

            $suggestion.val(selectedItemValue).trigger('change');
        },
    }
  };

  return {
    init: function() {
      $suggestion.easyAutocomplete(options);
    }
  };

});
