var registration = angular.module('registration',[]);

registration.controller('RegistrationController', ['$scope', function($scope){
	$scope.register = function()
	{
		
		$http.post('/api/create_dist', $scope.newDist).then(function(response){
			$scope.feedback = response.data;		

		}, function(response){
			$scope.feedback = response.data;
		});
		
		
		if ($user_type = "distributor")
		{
			$window.location = "custom-homepage-distributor";
		}
		else
		{
			$window.location = "custom-homepage-collector";
		}
	};
	
	
}])