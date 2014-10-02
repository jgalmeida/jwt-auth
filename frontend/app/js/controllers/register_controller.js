(function(angular) {

  var module = angular.module('frontend.controllers');

  var RegisterController = function($scope, $location, authService) {

    $scope.submit = function() {
      $scope.message = '';

      var params = { email: $scope.email, password: $scope.password };

      function success(data, status, headers, config) {
        $scope.message = 'Welcome';
        $location.path('/dashboard');
      }

      function error(data, status, headers, config) {
        $scope.message = 'Error: Invalid username or password';
      }

      authService.register(params, success, error);
    };
  };

  module.controller('registerController', ['$scope', '$location', 'authService', RegisterController]);

})(angular);