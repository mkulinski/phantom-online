angular
  .module('My.LoginController', ['ngRoute', 'My.UserFactory'])
  .controller('LoginController', ['$scope', 'UserFactory', '$http', '$location', LoginController]);

// $location instead of window location
function LoginController($scope, UserFactory, $http, $location) {
  $scope.username = UserFactory.username;
  $scope.password = UserFactory.password;

  $scope.processForm = function () {
    $http.post('/login', JSON.stringify({ username: $scope.username, password: $scope.password }))
      .success(function (response) {
        console.log(response);
        if (response.status === 'Login successful!') {
          $location.path('/take-a-pic');
        } else {
          $location.path('/login');
        }

        // if (!loginDetails.success) {
        //   // if not successful, bind errors to error variables
        //   // $scope.errorName = loginDetails.errors.username;
        //   // $scope.errorPassword = loginDetails.errors.password;
        // } else {
        //   // if successful, bind success message to message
        //   $scope.updLoginDetails = loginDetails;
        //   if ($scope.updLoginDetails.successful == true) {
        //     loginDetails.username = $scope.updLoginDetails.customerDetails.cust_NM;
        //     window.localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
        //     $location.path('/take-a-pic');
        //   }
        //
        //   $scope.message = data.message;
        // }
      });
  };
}
