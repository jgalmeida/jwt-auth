(function(angular) {
  var app = angular.module('frontend', ['ngResource', 'ngRoute', 'frontend.services', 'frontend.controllers', 'frontend.interceptors']);

  app.config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('authInjector');

    $routeProvider.
      when('/login', {
        templateUrl: 'login.html',
        controller: 'loginController',
        resolve: {
          auth: function($q, $location) {
            return $location.path('/dashboard');
          }
        }
      })
      .when('/register', {
        templateUrl: 'register.html',
        controller: 'registerController',
        resolve: {
          auth: function($q, $location) {
            return $location.path('/dashboard');
          }
        }
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