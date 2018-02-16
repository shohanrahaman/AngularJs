/**
*	Shohan Rahaman
*/

//Full process one line
angular.module("myModule",[]).controller("myController",function($scope){
var technologies = [
	{name : "java",likes : 0,dislikes : 0},
	{name : "c# ",likes : 0, dislikes : 0},
	{name : "wps",likes : 0,dislikes : 0},
	{name : "graphics",likes : 0,dislikes : 0}
];
$scope.technologies = technologies;

$scope.incrementLikes = function(technology) {
	technology.likes++;
};

$scope.incrementdislikes = function(technology) {
	technology.dislikes++;
};

});

/**
*	Module,Controller,Register,Directive,Expression
*/