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

    app.peopleService = peopleService;

    peopleService.getPeople();

  })

  .factory('Person', function() {
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    return Person;
  })

  .service('peopleService', function($http, Person) {
    var peopleService = this;

    peopleService.getPeople = function() {
      return $http.get('http://beta.json-generator.com/api/json/get/41FDr1bzg')
        .then(function (result) {
          peopleService.people = result.data.map(function (personData) {
            return new Person(personData.name.first, personData.name.last)
          });
        })
    }
  })
;