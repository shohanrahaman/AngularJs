angular.module("myApp",[]).controller("myCtrl",function($scope){
	var employees = [
		{name : "a", age : 1, address : "q"},
		{name : "b", age : 2, address : "w"},
		{name : "c", age : 3, address : "e"},
		{name : "d", age : 4, address : "r"},
		{name : "e", age : 5, address : "t"},
		{name : "f", age : 6, address : "y"},
		{name : "g", age : 7, address : "u"},
		{name : "h", age : 8, address : "i"}
	];
	$scope.employee = employees;
});