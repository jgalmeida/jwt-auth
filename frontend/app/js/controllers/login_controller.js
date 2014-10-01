(function(angular) {

  var module = angular.module('frontend.controllers');

  var LoginController = function($scope, $window, $http) {
    $scope.submit = function() {

    $scope.message = '';

    var params = { email: $scope.email, password: $scope.password };

      $http
        .post('http://user.service.com:9001/authenticate', params)
        .success(function(data, status, headers, config) {
          $window.sessionStorage.token = data.token;
          $scope.message = 'Welcome';
        })
        .error(function(data, status, headers, config) {
          delete $window.sessionStorage.token;

          $scope.message = 'Error: Invalid username or password';
        });
    };
  };

  module.controller('loginController', ['$scope', '$window', '$http', LoginController]);

})(angular);