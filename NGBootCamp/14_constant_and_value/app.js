angular.module('app', [
  'config'
])
  .directive('simple', function() {
    return {
      template: '<h2>{{message}}</h2>'
    }
  })

  .controller('AppCtrl', function AppCtrl(MESSAGE) {
    var app = this;
    app.message = MESSAGE;
  })
;