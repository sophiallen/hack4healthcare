var submit = angular.module('submitApp',[]);

submit.controller('submitController', function($scope, $http, $window){
	console.log("I am in the submit controller.");
	$scope.submit=function(){
		$window.location.href = "custom-homepage-distributor.html";
	};
})