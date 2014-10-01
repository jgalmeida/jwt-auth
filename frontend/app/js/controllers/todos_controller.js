(function(angular) {

  var module = angular.module('frontend.controllers');

  var TodosController = function($scope, $window, $http, todoService) {
    $scope.todos = todoService.query();
  };

  module.controller('todosController', ['$scope', '$window', '$http', 'todoService', TodosController]);

})(angular);