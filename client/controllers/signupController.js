angular
  .module('My.SignupController', ['ngRoute', 'My.UserFactory'])
  .controller('SignupController', ['$scope', 'UserFactory', '$http', '$location', SignupController]);

// $location instead of window location
function SignupController($scope, UserFactory, $http, $location) {
  $scope.username = UserFactory.username;
  $scope.password = UserFactory.password;

  $scope.processForm = function () {
    $http.post('/signup', JSON.stringify({ username: $scope.username, password: $scope.password }))
      .success(function (response) {
        console.log(response);
        if (response.status === 'Login successful!') {
          $location.path('/take-a-pic');
        } else {
          $location.path('/signup');
        }
      });
  };
}
