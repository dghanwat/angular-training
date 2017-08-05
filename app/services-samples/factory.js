angular.module('sample', []);
.factory('UserService', ['$resource', function($resource) {
    var UserService= function(){
        this.fn1= function(){};
        this.fn2= function(){};
    }
    return new UserService();
}]);
