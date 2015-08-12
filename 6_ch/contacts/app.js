var app = angular.module("contactApp", []);
app.controller("contactController", function($scope){
	$scope.newContacts = new Array();

	$scope.addContact = function(){
		$scope.newContacts.push({
			name: $scope.contact.name,
			email: $scope.contact.email,
			phone: $scope.contact.phone
		})
		$scope.contact.name = '';
		$scope.contact.email = '';
		$scope.contact.phone = '';
		console.log($scope.newContacts)
	}
})
	
	// $scope.contact = {
	// 	name: 'Rebecca', email: 'blah@blah.com', phone: '917-414-4141'
	// },
	// $scope.newContact = {};

	// $scope.submit = function(){
	// 	if ($scope.contact.name){
	// 		// if($scope.newContact.email){
	// 			// if ($scope.newContact.phone){
	// 				$scope.contact.push(this.name);
 //        	$scope.contact.name = '';
 //        	// $scope.contact.email = '';
 //        	// $scope.contact.phone = '';
	// 			// }
	// 		// }
	// 	}
