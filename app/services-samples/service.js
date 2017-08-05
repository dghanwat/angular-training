angular.module('sample', []);
//Here we don't have to return anything, Angular will do the new by itself
//We have won one line of code...
.service('UserService', ['$resource', function($resource) {
    this.fn1= function(){};
    this.fn2= function(){};
}]);
