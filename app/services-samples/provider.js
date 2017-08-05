// provider()
//Provider with a function...
angular.module('sample',[])
.provider('UserService', function(){
	var logLevel= 'INFO';

	this.setLogLevel= function(customlogLevel){
		logLevel= customlogLevel;
	};

	//$get returns your service definition
    this.$get = ['$log', function ($log) {

    	var UserService= function(){
    		var method1= function(){
    			if (logLevel === 'INFO'){
    				$log(...);
    				...
    			}
    		};
    		var method2= function(){...};

    	};

        return new UserService();
    };
});

angular.module('myApp', ['sample'])
.config(['UserServiceProvider', function(userServiceProvider){
	// We can get the provider during the configuration phase only
	// So we can configure the service
	userServiceProvider.setDebugMode()
}])
.controller('MyController', ['$scope', 'UserService', function($scope,userService){
	//And when the application starts, we can use the service itself
	userService.method1();
}]);
