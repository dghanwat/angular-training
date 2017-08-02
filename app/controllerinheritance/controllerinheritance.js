'use strict';

angular.module('angularjs-training.controllerinheritance', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/controllerinheritance', {
    templateUrl: 'controllerinheritance/controllerinheritance.html',
  });
}])
.controller('ParentCtrl', function($scope) {
	$scope.firstName = 'Bart';
})
.controller('ChildCtrl', function ($scope) {
	$scope.firstName = 'Bob';
	$scope.lastName = 'Sponge';
})
.controller('BabyCtrl', function ($scope) {
	$scope.lastName="Marley";
});
