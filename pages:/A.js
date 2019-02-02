var thebananasgame = angular.module('thebananasgame', []);



thebananasgame.controller('m', ['$scope', function($scope, $window) {

	$scope.init = function () {
		loadIframe(null, null)
	}

	$scope.init() 



	function loadIframe (data, frameId) {

		if ( data ==== null || frameId === null ) {
			displayBase()
		}

		// console.log('***lI is hidden ', frameId)
		printIsHidden()
		var parent = document.createElement('div')
			parent.id = "breadcrumbsOverlayContainer"
			parent.className = "breadcrumbsOverlayContainer " + frameId

		// console.log('iframeViewLoading', data)
		var iframe = document.createElement('iframe')
			iframe.className = "breadcrumbsOverlay " + frameId
			iframe.id = "breadcrumbsOverlay"
			// iframe.src = data
			// iframe.src = chrome.extension.getURL('iframe/iframeView.html')
		
		parent.appendChild(iframe)
		document.body.appendChild(parent)	

		var span = document.createElement('span')	
			span.textContent = "Hi!"

		var iframe = document.getElementById('breadcrumbsOverlay')
			iframe.contentWindow.document.body.appendChild(span)

		document.getElementById(hideButton.id).addEventListener("click", function ( ) { hideBreadcrumbsOverlay(data) } );
		dragElement(document.getElementById(parent.id));

	} 

	function displayBase () {

		$scope.currentView = {
			"1" : "hidden",
			"2" : "hidden",
			"3" : "hidden",
			"A" : "pages/A.html",
			"B" : "pages/B.html",
			"C" : "pages/C.html",
 		}

	}

}])
