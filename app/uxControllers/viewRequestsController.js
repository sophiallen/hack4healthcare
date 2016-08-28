var requests = angular.module('requestsViewer',[]);

requests.controller('viewRequestsController', function($scope, $http, $window){
  console.log("I am in the requestsViewer controller.");
  
  $scope.requestList =
  [
    {org: 'sample', tampons: '5', pads: '3', cups: '2', urgency: 'Immediately'},
    {org: 'sample', tampons: '5', pads: '3', cups: '2', urgency: 'Immediately'},
    {org: 'sample', tampons: '5', pads: '3', cups: '2', urgency: 'Immediately'}    
  ]
});