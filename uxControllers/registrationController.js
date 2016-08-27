var registration = angular.module('registrationController',[]);

registration.controller('RegistrationController', ['$scope', function($scope){
	$scope.register = function()
	{
		
		$http.post('/api/create_dist', $scope.newDist).then(function(response){
			$scope.feedback = response.data;		

		}, function(response){
			$scope.feedback = response.data;
			$scope.displayDetailForm = false;
		});
		
		
		if ($user_type = "distributor")
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