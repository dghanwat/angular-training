'use strict';

angular.module('angularjs-training.filterexample', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/filterexample', {
        templateUrl: 'filterexample/filterexample.html',
        controller: 'FilterExampleCtrl'
    });
}])

.controller('FilterExampleCtrl', ['$scope',function($scope) {
    $scope.results = {
        year:2013,
        subjects:[
            {title:'English',grade:'A'},
            {title:'Maths',grade:'A'},
            {title:'Science',grade:'B'},
            {title:'Geography',grade:'C'}
        ]
    };
}]);
