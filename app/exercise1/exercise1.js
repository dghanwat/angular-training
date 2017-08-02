'use strict';

angular.module('angularjs-training.exercise1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/exercise1', {
    templateUrl: 'exercise1/exercise1.html',
    controller: 'Exercise1Ctrl'
  });
}])

.controller('Exercise1Ctrl', ['$scope',function($scope) {

}]);
