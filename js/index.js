var thebananasgame = angular.module('thebananasgame', []);

thebananasgame.controller('m', ['$scope', function($scope, $window) {

	$scope.init = function () {
		$scope.errorMessage = ""
		$scope.test = "1"
		loadIframe(null, null)

	}

	$scope.init() 

	function loadIframe (data, frameId) {
		console.log('this')
		if ( data === null || frameId === null ) {
			console.log('that')
			displayBase()
		}
	} 

	$scope.stackNext = function () {
		console.log('stackNext called')
		var stack = $scope.stack
		$scope.stack = []
		
		for ( var u = 1; u < stack.length; u++ ) {
			console.log('u is', u)

			

			if ( u == 1 ) {
				stack[u].h = ""

			}
			$scope.stack.push(stack[u])
		}
	}

	function displayBase () {

		$scope.stack = [{
				"c" : "file:///Users/alexandermorris/Desktop/Blockchain.wtf/Graphics/101.jpg",
				"h" : "",
				"t" : "Welcome to the Bananas Game"
			},{
				"c" : "file:///Users/alexandermorris/Desktop/Blockchain.wtf/Graphics/404.jpg",
				"h" : "hidden",
				"t" : "hi"
			},{
				"c" : "file:///Users/alexandermorris/Desktop/Blockchain.wtf/Graphics/Ashton_Kutcher.jpg",
				"h" : "hidden",
				"t" : "yy"
			}]

	}

}])
