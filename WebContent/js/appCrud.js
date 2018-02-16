angular.module("myApp", []).controller("myController", function($scope) {
    $scope.newUser = {};
    $scope.info = "";

    $scope.users = [{
        name: "shohan",
        email: "shohansazal@gmail.com",
        phone: "01711000000"
    }, {
        name: "shamim",
        email: "shamimjava@gmail.com",
        phone: "01911000000"
    }, {
        name: "sunzida",
        email: "sunzidanasrin@gmail.com",
        phone: "01670000000"
    }];

    $scope.saveUser = function() {
        $scope.users.push($scope.newUser);
        $scope.info = "New Contact Added Successfully !";
        $scope.newUser = {};
    };

    $scope.selectUser = function(user) {
        $scope.clickedUser = user;
    };

    $scope.deleteUser = function() {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.info = "Contact Deleted Successfully !";
    };

    $scope.clearInfo = function() {
        $scope.info = "";
    };
});