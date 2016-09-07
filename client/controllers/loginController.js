angular
  .module('My.LoginController', ['ngRoute', 'My.UserFactory'])
  .controller('LoginController', ['$scope', 'UserFactory', '$http', '$location', LoginController]);

// $location instead of window location
function LoginController($scope, UserFactory, $http, $location) {

  $scope.processForm = function () {
    $http.post('/login', JSON.stringify({ username: $scope.username, password: $scope.password }))
      .success(function (response) {
        console.log(response);
        if (response.status === 'Login successful!') {
          UserFactory.username = $scope.username;
          UserFactory.password = $scope.password;

          $location.path('/take-a-pic');
        }
      })
      .error(function (response) {
        $scope.message = "Please enter a valid username and password";
      });
  };
}
