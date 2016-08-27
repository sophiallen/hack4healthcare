var registration = angular.module('registration',[]);

registration.controller('RegistrationController', ['$scope', function($scope){
	$scope.register = function()
	{
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