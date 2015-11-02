angular.module('app', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
    app.message = "now I am using ctrl as!";
    app.displayMessage = '';

    app.submit = function(value) {
      console.log(value); //submit this to some long running server process
      app.displayMessage = value;
    }
  })
;