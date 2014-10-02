(function(angular) {

  var module = angular.module('frontend.controllers');

  var LoginController = function($scope, $location, authService) {

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

      authService.authenticate(params, success, error);
    };
  };

  module.controller('loginController', ['$scope', '$location', 'authService', LoginController]);

})(angular);