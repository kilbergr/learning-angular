var app = angular.module("redditApp", []);
app.controller("postController", function($scope){
	$scope.posts = new Array();

	$scope.addPost = function(){
		$scope.posts.push({
			title: $scope.post.title,
			content: $scope.post.content,
			image: $scope.post.image,
			date: new Date(),
			comments: new Array(),
			showCommentForm: false
		})
		$scope.post.title = '';
		$scope.post.content ='';
		$scope.post.image ='';
		$scope.post.date = '';
	}

	// $scope.post.comments = new Array();

	$scope.addComment = function(){
		$scope.post.comments.push({
			author: $scope.post.comment.author,
			comment: $scope.post.comment.comment
		})
		$scope.post.comment.author = '';
		$scope.post.comment.comment = '';
	}

})

