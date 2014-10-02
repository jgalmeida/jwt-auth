(function(angular) {
  var module = angular.module('frontend.interceptors');

  module.factory('authInjector', ['$q', '$window', '$location', function ($q, $window, $location) {
    return {
      request: function (config) {
        config.headers = config.headers || {};

        if ($window.sessionStorage.token) {
          config.headers.AUTHORIZATION = $window.sessionStorage.token;
        }

        return config;
      },
      response: function (response) {
        if (response.status === 401) {
          $location.path('/login');
          return $q.reject(response.statusText);
        }

        return response || $q.when(response);
      },
      responseError: function (response) {
        if (response.status === 401) {
          $location.path('/login');
          return $q.reject(response.statusText);
        }

        return response || $q.when(response);
      }
    };
  }]);
})(angular);