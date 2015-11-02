angular.module('app', [])
  .directive('customTitle', function() {
    return {
      scope: {
        title: '@'
      },
      template: '<h1>{{title}}</h1>'
    }
  })
  .directive('idCard', function() {
    return {
      restrict: 'E',
      scope: {
        person: '=',
        doStuff: '&'
      },
      template: '<div ng-click="doStuff({target:person})">First: {{person.firstName}} Last: {{person.lastName}}</div>'
    }
  })
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.title = 'this is the title...';
    app.greetPerson = function(target) {
      console.log('HELLLO!!!!!!! ' + target.firstName);
    }
    app.insultPerson = function(target) {
      console.log('you are goofy ' + target.firstName);
    }

    app.person = {
      firstName: 'Joel',
      lastName: 'Hooks'
    }
  })
;