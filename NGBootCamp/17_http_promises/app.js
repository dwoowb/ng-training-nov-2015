angular.module('app', [
  'config'
])
  .directive('simple', function() {
    return {
      template: '<h2>{{message}}</h2>'
    }
  })

  .controller('AppCtrl', function AppCtrl(MESSAGE, peopleService) {
    var app = this;
    app.message = MESSAGE;

    peopleService.getPeople().then(function(people) {
      app.people = people;
    }, function() {
      console.log('handle the error in the controller');
    });

  })

  .factory('Person', function() {
    function Person(firstName, lastName) {
      var person = this;
      person.firstName = firstName;
      person.lastName = lastName;
      person.fullName = function() {
        return person.firstName + ' ' + person.lastName;
      }
    }

    return Person;
  })

  .service('peopleService', function($http, Person) {
    var peopleService = this;

    peopleService.getPeople = function() {
      return $http.get('http://beta.json-generator.com/api/json/get/41FDr1bzg')
        .then(function success(result) {
          return result.data.map(function (person) {
            return new Person(person.name.first, person.name.last);
          });
        }).catch(function error(error) {
          console.log('catch: ', error)
        });
    }
  })
;