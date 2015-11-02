angular.module('app', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.newPersonName = '';

    app.addNewPerson = function() {
      app.people.push(app.newPersonName);
      app.newPersonName = '';
    };

    app.handlePersonClicked = function(person) {
      console.log(person);
    };

    app.people = [
      'Mary',
      'Brenda',
      'Brenda',
      'Cosmo',
      'Artur',
      'Tanis',
      'Lenny'
    ];
  })
;