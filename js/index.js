var thebananasgame = angular.module('thebananasgame', []);

var sampleData = [{
				"mediaUrl" : "/media/101.jpg",
				"overlayText" : "Welcome to the Bananas Game",
				"message" : ""
			},{
				"mediaUrl" : "/media/404.jpg",
				"overlayText" : "hi",
				"message" : ""
			},{
				"mediaUrl" : "/media/Ashton_Kutcher.jpg",
				"overlayText" : "yy",
				"message" : ""
			}]

var intro = [{
				"" : "",
				"overlayText" : "Welcome to the Bananas Game",
				"message" : "Click the button in the bottom right corner to proceed."
			},{
				"mediaUrl" : "",
				"overlayText" : "It's easy to play!",
				"message" : "As long as you're human"
			},{
				"mediaUrl" : "/media/Ashton_Kutcher.jpg",
				"overlayText" : "",
				"message" : ""
			},{
				"mediaUrl" : "",
				"overlayText" : "Who's that?",
				"message" : ""
			},{
				"mediaUrl" : "",
				"overlayText" : "It's @Ashton_Kutcher",
				"message" : ""
			}]			



thebananasgame.controller('m', ['$scope', function($scope, $window) {

	$scope.init = function () {

		$scope.stack = []
		populateStack(intro)

	}

	$scope.init() 

	$scope.stackNext = function () {

		if ( $scope.stack.length > 1 ) {
			console.log('stackNext called')
			var stack = $scope.stack
			$scope.stack = []
			
			for ( var u = 1; u < stack.length; u++ ) {
				stack[u].style = returnStyle(u)
				$scope.stack.push(stack[u])
			}
		} else {
		 	populateStack(sampleData)
		}

	}

	function returnStyle ( u ) {
		var offset = u * 2 + 10
		if ( u < 10 ) {
			var style = "left: " + offset + "px; top: " +  offset + "px; z-index: calc( 100 - " + u + ");";
		} else {
			var style = "display: none;"
		}
		
		return style
	}

	function populateStack ( data ) {
		for ( var l = 0; l < data.length; l ++ ) {
			console.log('adding data item to stack', data[l])
			var u = $scope.stack.length + 1

			var style = returnStyle( u )

			var newItem = {
				'mediaUrl' : data[l].mediaUrl,
				'overlayText' : data[l].overlayText,
				'message' : data[l].message,
				'style' : style
			}

			$scope.stack.push(newItem)
			console.log('added an item to stack', $scope.stack)
		} 
	}

}])
