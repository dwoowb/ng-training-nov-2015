angular.module('app', [])
  .directive('customTitle', function() {
    return {
      template: '<h1>{{app.title}}</h1>'
    }
  })
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.title = 'this is the title...'
  })
;