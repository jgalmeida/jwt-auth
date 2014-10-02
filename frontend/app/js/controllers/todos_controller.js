(function(angular) {

  var module = angular.module('frontend.controllers');

  var TodosController = function($scope, $window, $http, $location, todoService) {
    $scope.todos = todoService.query();

    $scope.submit = function() {
      $scope.message = '';

      var params = { description: $scope.description };

      todoService.save(params, function(data) {
        $scope.todos.push(data);
        $scope.message = 'Success';
        $location.path('/todos');
      });
    };
  };

  module.controller('todosController', ['$scope', '$window', '$http', '$location', 'todoService', TodosController]);

})(angular);