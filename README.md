angular-emojiuni [![Build Status](https://travis-ci.org/angularifyjs/angular-emojiuni.svg?branch=master)](https://travis-ci.org/angularifyjs/angular-emojiuni) [![Coverage Status](https://img.shields.io/coveralls/angularifyjs/angular-emojiuni.svg)](https://coveralls.io/r/angularifyjs/angular-emojiuni?branch=master)
===============

Emoji Unicode for Angular web application. This module is best for sharing data between Native app and Web app. 

For more information about emoji unicode tables, please visit

[http://apps.timwhitlock.info/emoji/tables/unicode](http://apps.timwhitlock.info/emoji/tables/unicode)


Usage
---------

## Installing

Download the [Production version](https://raw.githubusercontent.com/angularifyjs/bower-angular-emojiuni/master/emojiuni.min.js) or the [Development version](https://raw.githubusercontent.com/angularifyjs/bower-angular-emojiuni/master/emojiuni.js).

Or download it with bower: open terminal and run

```
bower install bower-angular-emojiuni
```

Include js files into your web page:

```html
<script type="text/javascript" src="[...]/emojiuni[.min].js"></script>
```

Add dependency to your app module:

```javascript
angular.module('your-app-name', [
  'angular-emojiuni'
]);
```

The `emojiuni` module is now installed. It exposes the `EmojiuniProvider` provider, `Emojiuni` factory and `emojiuni` filter into your app.


## Using

```javascript
angular.module('app', [
  'angular-emojiuni'

]).config(function(EmojiuniProvider){
  EmojiuniProvider.baseUrl = '/custom/base/url/';
  var src = '<div>hello moto 😁</div>';
  var dest = '<div>hello moto <img class="emojiuni" src="/custom/base/url/1f601.png" /></div>';

  Emojiuni.compile(src); // should equal dest
  
}).run(function(Emojiuni, $http){
  var src = '<div>hello moto 😁</div>';
  var dest = '<div>hello moto <img class="emojiuni" src="/custom/base/url/1f601.png" /></div>';

  Emojiuni.compile(src); // should equal dest

});
```

```html
<div ng-bind="data | emojiuni"></div>

<div>{{data | emojiuni}}</div>
```


Documentation
-------------
See [Getting started](https://github.com/angularifyjs/angular-emojiuni/wiki/Getting-started)


Release History
-------------
See [CHANGELOG.md](https://github.com/angularifyjs/angular-emojiuni/blob/master/CHANGELOG.md)


Contributing
-------------
See [CONTRIBUTING.md](https://github.com/angularifyjs/angular-emojiuni/blob/master/CONTRIBUTING.md)


License
-------------
MIT - Copyright (c) 2014 Angularfiy.org & HenryTao.



