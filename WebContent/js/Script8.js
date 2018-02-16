angular.module("myApp",[]).controller("myController",function($scope){
	$scope.employees = [
		{name: "salam",dob: new date("August 10 1990"),gender: "Male",salary: 500000.856},
		{name: "rofiq",dob: new date("February 20 1991"),gender: "Female",salary: 600000.856},
		{name: "kamal",dob: new date("March 15 1989"),gender: "Male",salary: 700000.86}
	];
});