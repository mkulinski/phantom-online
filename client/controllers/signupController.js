angular
  .module('My.SignupController', ['ngRoute', 'My.UserFactory'])
  .controller('SignupController', ['$scope', 'UserFactory', '$http', '$location', SignupController]);

// $location instead of window location
function SignupController($scope, UserFactory, $http, $location) {
  UserFactory.username = $scope.username;
  UserFactory.password = $scope.password;

  $scope.processForm = function () {
    $http.post('/signup', JSON.stringify({ username: $scope.username, password: $scope.password }))
      .success(function (response) {
        console.log(response);
        if (response.status === 'Signup successful!') {
          $location.path('/take-a-pic');
        }
      })
      .error(function (reponse) {
        $scope.message = 'Please enter a valid username and password';
      });
  };
}
