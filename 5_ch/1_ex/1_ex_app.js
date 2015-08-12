var app = angular.module("HPApp", []);
app.controller("HarryPotterController", function($scope){
      $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"],
      $scope.symbols = ["\u2660 (spades)", "\u2663 (clubs)", '\u2665 (hearts)', '\u2666 (diamonds)'],
      $scope.dupes = [1,1,2,5,6,9,9,9];

})