var app = angular.module("redditApp", ['ngMdIcons', 'ngAnimate'])
// .config(function($momentProvider){
//     $momentProvider
//       .asyncLoading(false)
//       .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
//   });

app.controller("postController", function($scope){
	'use strict';
	$scope.posts = new Array();

	$scope.addPost = function(){
		if ($scope.post.title && $scope.post.content && $scope.post.image){
			$scope.posts.push({
				title: $scope.post.title,
				content: $scope.post.content,
				image: $scope.post.image,
				author: $scope.post.author,
				date: new Date(),
				comments: [],
				showCommentForm: false,
				showComments: false,
				votes: 0})
				if($scope.posts[$scope.posts.length-1]){
					$scope.post.title = '';
					$scope.post.author = '';
					$scope.post.content = '';
					$scope.post.image = '';
			}
		}
		else {
			alert("Please fill in all fields!")
		}
	}

	$scope.addComment = function(){
		this.post.comments.push({
			author: this.post.comment.author,
			content: this.post.comment.content
		})
		this.post.comment.author = '';
		this.post.comment.content = '';
		// console.log(this.post.comments);
	}

	$scope.addVote = function(){
		this.post.votes +=1;
	}
	$scope.removeVote = function(){
		this.post.votes -=1;
	}
})



	// $scope.addPost = function(){
	// 	var newPost = $scope.post
	// 	$scope.post.date = new Date();
	// 	$scope.post.votes = 0
 //   	$scope.post.showCommentForm = false
 //   	$scope.post.comments = []

	// 	if ($scope.post.title && $scope.post.content && $scope.post.image){
	// 		$scope.posts.push(newPost);
	// 		$scope.resetPost();
	// 	}
	// 	else {
	// 		alert("Please fill in all form fields!");
	// 	}

	// }

	// $scope.resetPost = function(){
	// 	$scope.newPost = {};
 		
 // 		var reset_pristine = function(form){
 //    if(form.$setPristine){
 //        form.$setPristine();
 //    } else {
 //        form.$pristine = true;
 //        form.$dirty = false;
 //        angular.forEach(form, function (input, key) {
 //            if (input.$pristine)
 //                input.$pristine = true;
 //            if (input.$dirty) {
 //                input.$dirty = false;
 //            }
 //        });
 //    	}
	// 	};
	// 	reset_pristine($scope.post);
	// }
			

	// $scope.post.comments = new Array();


