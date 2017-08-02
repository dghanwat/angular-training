'use strict';

angular.module('angularjs-training.promise', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/promise', {
        templateUrl: 'promise/promise.html',
        controller: 'PromiseCtrl'
    });
}])
.controller('PromiseCtrl', ['$scope','PromiseService',function($scope,PromiseService) {
    $scope.name = "dhananjay"
    $scope.greeting = "";
    $scope.greet = function() {
        var greetPromise = PromiseService.greet($scope.name)
        $scope.greeting = "Waiting for promise"
        greetPromise.then(function (data) {
            $scope.greeting = data;
        }, function (error) {
            $scope.greeting = error;
        })
    }
}])
.service('PromiseService',['$q',function ($q) {
    this.greet = function(name) {
        var defer = $q.defer()
        setTimeout(function() {
            //Greet when your name is 'dhananjay'
            if (name == 'dhananjay') {
                defer.resolve('Hello, ' + name + '!');
            }
            else {
                defer.reject('Greeting ' + name + ' is not allowed.');
            }
        },5000)
        return defer.promise
    }
}])
