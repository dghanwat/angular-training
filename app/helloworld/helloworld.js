'use strict';

angular.module('angularjs-training.helloworld', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/helloworld', {
    templateUrl: 'helloworld/helloworld.html',
    controller: 'HelloWorldCtrl'
  });
}])

.controller('HelloWorldCtrl', ['$scope',function($scope) {
    $scope.name = "World";
}]);
