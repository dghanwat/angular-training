'use strict';

angular.module('angularjs-training.directives', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/directives', {
    templateUrl: 'directives/directives.html',
    controller: 'DirectivesCtrl'
  });
}])
.controller('DirectivesCtrl', ['$scope',function($scope) {
    $scope.msg = ""
    $scope.address = {
        "addressLine1":"Atos India Pvt. Ltd",
        "addressLine2":"Block 1.5",
        "addressLine3":"ETZ",
        "addressLine4":"Phase 2, Hinjewadi",
        "city":"Pune",
        "pincode":"411027"
    }
}])
.directive('myDirective', function() {
    return {
        restrict: 'A,E', // restrict: 'E' means “restrict the usage of this directive to only Elements.”
                    //E (Element name): <my-directive></my-directive>
                    //A (Attribute): <div my-directive="exp"></div>
                    //C (Class): <div class="my-directive: exp;"></div>
        template: '<h1>I made a directive!</h1>' ,// Replaces the current element with the contents of the HTML
        //You can understand it as the controller which has access to your element
        // It looks like the controller because it has access to the scope
        // And it also has access to the element itself, which allows you to manipulate the element attributes if needed, or to work on the dom
        link: function(scope,elem,attrs) {
            scope.msg = "Hello from My Directive"
        }
    };
})
.directive('address', function() {
    return {
        restrict: 'A,E', // restrict: 'E' means “restrict the usage of this directive to only Elements.”
                    //E (Element name): <my-directive></my-directive>
                    //A (Attribute): <div my-directive="exp"></div>
                    //C (Class): <div class="my-directive: exp;"></div>
        template: '<h2>Address Line 1: {{address.addressLine1}}</h2><h2>Address Line 2: {{address.addressLine2}}</h2>' ,// Replaces the current element with the contents of the HTML
        //You can understand it as the controller which has access to your element
        // It looks like the controller because it has access to the scope
        // And it also has access to the element itself, which allows you to manipulate the element attributes if needed, or to work on the dom
        link: function(scope,elem,attrs) {
            //elem.append("<strong>"+attrs.title+"</strong>");
        }
    };
});
