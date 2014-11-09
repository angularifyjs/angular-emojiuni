angular.module('angular-emojiuni', [
  'angular-emojiuni.chars'

]).provider('Emojiuni', function(EmojiuniCharsProvider) {
  var byChars = {};
  var allChars = [];
  var pattern = '';

  // init emoji data
  angular.forEach(EmojiuniCharsProvider.items, function(item) {
    angular.forEach(item.chars, function(c) {
      allChars.push(c);
      byChars[c] = item;
    });
  });
  pattern = new RegExp(allChars.join('|'), 'g');

  var emoji = {

    baseUrl: '/',

    compile: function(str) {
      str = str || '';
      angular.forEach(str.match(pattern), function(c) {
        str = str.replace(new RegExp(c, 'g'), emoji.getImage(c));
      });
      return str;
    },

    getImage: function(c) {
      if (!byChars[c]) {
        return '';
      }
      return '<img class="emojiuni" src="' + emoji.baseUrl + byChars[c].image + '" />';
    },

    $get: function() {
      return emoji;
    }

  };

  return emoji;

}).filter('emojiuni', function(Emojiuni) {
  return function(str) {
    return Emojiuni.compile(str);
  };

});