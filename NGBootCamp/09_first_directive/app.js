angular.module('app', [])
  .directive('first', function() {
    return function postLink() {
      console.log('this is a useless behavior');
    }
  })
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
  })
;