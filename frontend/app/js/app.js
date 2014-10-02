(function(angular) {
  var app = angular.module('frontend', ['ngResource', 'ngRoute', 'frontend.services', 'frontend.controllers', 'frontend.interceptors']);

  app.config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('authInjector');

    $routeProvider.
      when('/login', {
        templateUrl: 'login.html',
        controller: 'loginController'
      })
      .when('/register', {
        templateUrl: 'register.html',
        controller: 'registerController'
      })
      .when('/todos', {
        templateUrl: 'todos/index.html',
        controller: 'todosController'
      })
      .when('/todos/new', {
        templateUrl: 'todos/new.html',
        controller: 'todosController'
      })
      .when('/dashboard', {
        templateUrl: 'dashboard.html'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }]);
})(angular);