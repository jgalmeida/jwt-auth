(function(angular) {
  var module = angular.module('frontend.services');

  module.factory('authService', ['$http', '$window', '$location', function($http, $window, $location) {
    return new AuthService($http, $window, $location);
  }]);

  function AuthService($http, $window, $location) {

    function register(params, success, error) {
      $http
        .post('http://localhost:9001/register', params)
        .success(function(data, status, headers, config) {
          $window.sessionStorage.token = data.token;
          success(data, status, headers, config);
        })
        .error(function(data, status, headers, config) {
          delete $window.sessionStorage.token;
          error(data, status, headers, config);
        });
    }

    function authenticate(params, success, error) {
      $http
        .post('http://localhost:9001/authenticate', params)
        .success(function(data, status, headers, config) {
          $window.sessionStorage.token = data.token;
          success(data, status, headers, config);
        })
        .error(function(data, status, headers, config) {
          delete $window.sessionStorage.token;
          error(data, status, headers, config);
        });
    }

    function isAuthenticated() {
      return $window.sessionStorage.token;
    }

    function logout() {
      $location.path('/login');
      delete $window.sessionStorage.token;
    }

    function getToken() {
      return $window.sessionStorage.token;
    }

    return {
      getToken:        getToken,
      register:        register,
      authenticate:    authenticate,
      isAuthenticated: isAuthenticated,
      logout:          logout
    };
  }

})(angular);