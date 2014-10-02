(function(angular) {
  var module = angular.module('frontend.interceptors');

  module.factory('authInjector', ['$q', '$location', '$window', function ($q, $location, $window) {
    return {
      request: function (config) {
        config.headers = config.headers || {};

        if ($window.sessionStorage.token) {
          config.headers.AUTHORIZATION = $window.sessionStorage.token;
        }

        return config;
      },

      responseError: function (response) {
        if (response.status === 401) {
          $location.path('/login');
          delete $window.sessionStorage.token;
          return $q.reject(response.statusText);
        }

        if(response.status >= 400) {
          return $q.reject(response.statusText);
        }

        return response || $q.when(response);
      }
    };
  }]);
})(angular);