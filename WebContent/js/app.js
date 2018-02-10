angular.module("myApp",[]).controller("myController",function($scope){
	var employees = [
		{name : "megha",age : "4", country : "bangladesh"},
		{name : "soha",age : "3", country : "india"},
		{name : "shihab",age : "5", country : "usa"}	
	];
	$scope.emp = employees;
	
});