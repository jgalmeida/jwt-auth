(function(angular) {

  var module = angular.module('frontend.controllers');

  var ApplicationController = function($scope, authService) {

    $scope.logout = authService.logout;

  };

  module.controller('applicationController', ['$scope', 'authService', ApplicationController]);

})(angular);