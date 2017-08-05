'use strict';

angular.module('angularjs-training.survey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/survey', {
    templateUrl: 'survey/survey.html',
    controller: 'SurveyCtrl'
  });
}])

.controller('SurveyCtrl', ['$scope',function($scope) {
    $scope.name = "";
    $scope.email = "";
    $scope.comments = "";

    $scope.submitForm = function() {
        console.log("in submit");
    }

}]);
