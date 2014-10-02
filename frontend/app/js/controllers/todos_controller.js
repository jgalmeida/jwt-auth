(function(angular) {

  var module = angular.module('frontend.controllers');

  var TodosController = function($scope, $window, $http, todoService) {
    $scope.todos = todoService.query();

    $scope.submit = function() {
      $scope.message = '';

      var params = { description: $scope.description };

      todoService.save(params)
        .success(function(data, status, headers, config) {
          $scope.todos.push(data);
          $scope.message = 'Success';
        })
        .error(function(data, status, headers, config) {
          $scope.message = 'Error: params';
        });
    };
  };

  module.controller('todosController', ['$scope', '$window', '$http', 'todoService', TodosController]);

})(angular);