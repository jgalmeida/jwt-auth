(function(angular) {
  var module = angular.module('frontend.services');

  module.factory('brandService', ['$resource', function($resource) {
    return new BrandRestService($resource);
  }]);

  function BrandRestService($resource) {
    return $resource('http://localhost:9003/v0/brands', {},
      {
        list: { method: 'GET' }
      });
  }

})(angular);