var registration = angular.module('registrationController',[]);

registration.controller('registrationController', ['$scope', function($scope, $window){
	$scope.register = function(){
		console.log("I am in the register function.");
		if ($scope.user_type = "distributor")
		{
			$window.location.href ="custom-homepage-distributor.html";
		}
		else if ($scope.user_type = "collector")
		{
			$window.location.href = "custom-homepage-collector.html";
		}
		else //rediect to index.html
		{
			$window.location.href = "index.html";
		}
	};
}])