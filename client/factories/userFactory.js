/**
 * UserFactory belongs here
 */
angular
  .module('My.UserFactory', [])
  .factory('UserFactory', function () {
    return {
      username: '',
      password: '',
    };
  });
