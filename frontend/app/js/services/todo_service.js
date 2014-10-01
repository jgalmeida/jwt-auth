(function(angular) {
  var module = angular.module('frontend.services');

  module.factory('todoService', ['$resource', function($resource) {
    return new TodoRestService($resource);
  }]);

  function TodoRestService($resource) {
    return $resource('http://todo.service.com:9002/todos');
  }

})(angular);