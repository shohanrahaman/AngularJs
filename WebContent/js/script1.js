/**
*	Shohan Rahaman
*/

//Creating Module
var myApp = angular.module("myModule",[]);

//Creating Controller
var myController = function($scope){
	$scope.message1 = "Allah is almighty";
	$scope.message2 = "Allah helps us";
};

//Register the controller with the module
myApp.controller("myController",myController);

