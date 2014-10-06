(function(angular) {
  var app = angular.module('frontend', ['ngResource', 'ngRoute', 'frontend.services', 'frontend.controllers', 'frontend.interceptors']);

  app.config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {
    $httpProvider.interceptors.push('authInjector');

    $routeProvider.
      when('/login', {
        templateUrl: 'login.html',
        controller: 'loginController',
        resolve: {
          auth: function($q, $location, authService) {
            if(authService.isAuthenticated()) {
              return $location.path('/dashboard');
            }
          }
        }
      })
      .when('/register', {
        templateUrl: 'register.html',
        controller: 'registerController',
        resolve: {
          auth: function($q, $location, authService) {
            if(authService.isAuthenticated()) {
              return $location.path('/dashboard');
            }
          }
        }
      })
      .when('/todos', {
        templateUrl: 'todos/index.html',
        controller: 'todosController',
        resolve: {
          auth: function($q, $location, authService) {
            if(!authService.isAuthenticated()) {
              authService.logout();
            }
          }
        }
      })
      .when('/todos/new', {
        templateUrl: 'todos/new.html',
        controller: 'todosController',
        resolve: {
          auth: function($q, $location, authService) {
            if(!authService.isAuthenticated()) {
              authService.logout();
            }
          }
        }
      })
      .when('/brands', {
        templateUrl: 'brands/index.html',
        controller: 'brandsController',
        resolve: {
          auth: function($q, $location, authService) {
            if(!authService.isAuthenticated()) {
              authService.logout();
            }
          }
        }
      })
      .when('/brands/new', {
        templateUrl: 'brands/new.html',
        controller: 'brandsController',
        resolve: {
          auth: function($q, $location, authService) {
            if(!authService.isAuthenticated()) {
              authService.logout();
            }
          }
        }
      })
      .when('/dashboard', {
        templateUrl: 'dashboard.html',
        resolve: {
          auth: function($q, $location, authService) {
            if(!authService.isAuthenticated()) {
              authService.logout();
            }
          }
        }
      })
      .otherwise({
        redirectTo: '/login'
      });
  }]);
})(angular);