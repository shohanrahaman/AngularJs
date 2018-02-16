/**
*	Shohan Rahaman
*/

//Full process one line
angular.module("myModule",[]).controller("myController",function($scope){
var employees = [
	{name : "shohan rahaman",age : 50},
	{name : "shohan ",age : 50},
	{name : "rahaman",age : 40},
	{name : "rahim rahaman",age : 50}
];
$scope.employees = employees;
});

/**
*	Module,Controller,Register,Directive,Expression
*/