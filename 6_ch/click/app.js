var app = angular.module("clickApp", []);
app.controller("clickController", function($scope){
	$scope.number = 5,
	$scope.pickRandomNumber = function(){
        $scope.number = Math.floor(Math.random() * 10) + 1
    }
  }); 

 app.controller("reverseController", function($scope){
 	$scope.word = '';
 	$scope.reverseText = function(){
 		 for (var i = $scope.word.length-1; i >= 0 ; i--){
 		 		$scope.drow += $scope.word[i];
 		 }
 		 $scope.word = $scope.drow;
 	}
 });