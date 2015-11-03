angular.module('ps.models.user-list', [])
  .service('userListModel', function UserListModel($http) {
    var userList = this;

    userList.getUsers = function() {
      return $http.get('https://api.github.com/users').then(function (result) {
        return result.data;
      })
    }
  })
;