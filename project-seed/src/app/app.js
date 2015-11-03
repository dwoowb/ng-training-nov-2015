angular.module('project-seed', [
  'ui.router',
  'project-seed.common',
  'ngAria',
  'angularMoment',
  //'templates-app'
])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;

    $http.get('https://api.github.com/users').then(function(result) {
      console.log(result);
    })
  })
;