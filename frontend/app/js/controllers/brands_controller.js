(function(angular) {

  var module = angular.module('frontend.controllers');

  var BrandsController = function($scope, $location, brandService) {
    brandService.list(function(data) {
      $scope.brands = data.brands;
    });

    $scope.submit = function() {
      $scope.message = '';

      var params = { brand: { name: $scope.name } };

      brandService.save(params, function(data) {
        $scope.brands.push(data);
        $scope.message = 'Success';
        $location.path('/brands');
      });
    };
  };

  module.controller('brandsController', ['$scope', '$location', 'brandService', BrandsController]);

})(angular);