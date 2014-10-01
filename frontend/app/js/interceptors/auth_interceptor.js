(function(angular) {
  var module = angular.module('frontend.interceptors');

  module.factory('authInjector', ['$q', '$window', '$location', function ($q, $window, $location) {
    return {
      request: function (config) {
        config.headers = config.headers || {};

        if ($window.sessionStorage.token) {
          config.headers.HTTP_AUTHORIZATION = $window.sessionStorage.token;
        }

        return config;
      },
      response: function (response) {
        if (response.status === 401) {
          $location.path('/login');
        }

        return response || $q.when(response);
      }
    };
  }]);
})(angular);