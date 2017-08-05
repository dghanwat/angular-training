'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'angularjs-training.helloworld',
  'angularjs-training.exercise1',
  'angularjs-training.controllerinheritance',
  'angularjs-training.promise',
  'angularjs-training.survey',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/helloworld'});
}]);
