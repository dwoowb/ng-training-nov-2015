angular.module('app', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.people = [
      'Mary',
      'Brenda',
      'Cosmo',
      'Artur',
      'Tanis',
      'Lenny'
    ];
  })
;