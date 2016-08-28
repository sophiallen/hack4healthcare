var requests = angular.module('requestsViewer',[]);

requests.controller('viewRequestsController', function($scope, $http, $window){
  console.log("I am in the requestsViewer controller.");
  
  $scope.requestList =
  [
    {org: 'WYMCA', tampons: '5', pads: '20', cups: '12', urgency: 'Immediately'},
    {org: 'Safe Place for Teens', tampons: '15', pads: '30', cups: '2', urgency: 'Anytime'},
    {org: 'Women\'s Shelter', tampons: '10', pads: '10', cups: '5', urgency: 'Immediately'},  
    {org: 'Starbucks - 9th and Pike', tampons: '30', pads: '40', cups: '20', urgency: '1 - 2 weeks'}      
  ]
});