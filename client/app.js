const app = angular
  .module('myApp', [
    'ngRoute',
    'My.LoginController',
    'My.SignupController',
    'My.TakeApicController',
  ]);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
    })
    .when('/login', {
      templateUrl: './partials/login.html',
      controller: 'LoginController',
    })
    .when('/take-a-pic', {
      templateUrl: './partials/take-a-pic.html',
      controller: 'TakeApicController',
    })
    .when('/signup', {
      templateUrl: './partials/signup.html',
      controller: 'SignupController',
    })
    .when('/pictures', {
      templateUrl: './partials/pictures.html',
    });
}
