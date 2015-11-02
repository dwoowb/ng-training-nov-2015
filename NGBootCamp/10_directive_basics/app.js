angular.module('app', [])
  .directive('colorChange', function() {
    return {
      restrict:'A',
      link: function(scope, elem, attrs) {
        elem.on('click', function() {
          elem.toggleClass(attrs.colorChange || 'red');
        })
      }
    }
  })
  .directive('second', function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        console.log('second directive');
        console.log(scope);
        console.log(elem);
        console.log(attrs);
        elem.on('click', function() {
          console.log('CLICKED!!!!', attrs.message);
          scope.greeting = Math.random();
          scope.$apply();
        })
      }
    };
  })
  .directive('first', function() {
    return function postLink() {
      console.log('this is a useless behavior');
    }
  })
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
  })
;