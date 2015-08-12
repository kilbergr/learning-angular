var app = angular.module("firstApp", []);
app.controller("ExercisesController", function($scope){
    $scope.FavColor = "green",
    $scope.secondsInACentury = (75*365*24*60*60) + (25*366*24*60*60),
    $scope.rightNow = Date.now();
})