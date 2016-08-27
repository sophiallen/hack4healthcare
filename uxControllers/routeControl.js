var tamponApp = angular.module('tamponApp', [
    'ngRoute',
    'ngResource',
]);

tamponApp.config(function($routeProvider){
    $routeProvider
    .when('/#/registration',{
        templateUrl: 'registration.html',
    })
    .otherwise({
        redirectTo: '/#'
    });
});