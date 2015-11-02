angular.module('app', [])
  .directive('container', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template: '<div class="well" ng-transclude></div>'
    }
  })
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
    app.message = 'from the scope of the app'
  })
;