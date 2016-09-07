angular
  .module('HomeController', ['ngRoute'])
  .controller('HomeController', ['$scope']);


// function HomeController($scope, UserFactory, MessageFactory) {
//   $scope.unit = 'Unit 10 Prototype';
//   $scope.name = UserFactory.name;
//   $scope.age = UserFactory.age;
//
//   $scope.text = '';
//
//   $scope.currentOrdering = '-created_at';
//
//   $scope.searchText = '';
//   $scope.searchFilter = function (post) {
//     if ($scope.searchText === '') {
//       return true;
//     }
//     if (post.message === undefined) {
//       return false;
//     }
//     return (post.message.indexOf($scope.searchText) !== -1);
//   };
//
//   MessageFactory.fetch()
//   .then(function (response) {
//     $scope.messages = response.data;
//   });
//
//   $scope.post = function () {
//     MessageFactory.post({
//       message: $scope.text,
//       created_by: $scope.name,
//     }).then(function (response) {
//       const copyArr = Array.from($scope.messages);
//       copyArr.unshift(response.data);
//       $scope.messages = copyArr;
//     });
//   };
// }
