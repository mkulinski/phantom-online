angular
  .module('My.LoginController', ['ngRoute'])
  .controller('LoginController', ['$scope', '$http', '$location', LoginController]);

// $location instead of window location
function LoginController($scope, $http, $location) {
  $scope.formData = { username: '', password: '' };

  $scope.processForm = function () {
    $http.post('/login', JSON.stringify($scope.formData))
      .success(function (loginDetails) {
        console.log(loginDetails);

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
        $location.path('/take-a-pic');
      });
  };
}
