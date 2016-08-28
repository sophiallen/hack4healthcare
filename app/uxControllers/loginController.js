var login = angular.module('loginApp',[]);

login.controller('loginController', function($scope, $http, $window){
	$scope.logon = function(){
		if($scope.user == "dist1" && $scope.password == "dist1"){
			$window.location.href = "custom-homepage-distributor.html";
		}
		else if($scope.user == "supp1" && $scope.password == "supp1"){
			$window.location.href = "supplier.html";
		}
	};
	
})