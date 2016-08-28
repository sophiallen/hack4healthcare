var registration = angular.module('registerApp',[]);

registration.controller('registrationController', function($scope, $http, $window){

	console.log("I am in the contrl");
	$scope.register = function(){
		console.log("I am in the register function.");

		$http.post('/api/create_dist', $scope.newDist).then(function(response){
			$scope.feedback = response.data;		
		});
		
		if ($scope.newDist.user_type == "distributor")
		{
			$window.location.href ="custom-homepage-distributor.html";
		}
		else if ($scope.newDist.user_type == "supplier")
		{
			$window.location.href = "custom-homepage-supplier.html";
		}
		else //rediect to index.html
		{
			$window.location.href = "index.html";
		}
	};
	
	
})