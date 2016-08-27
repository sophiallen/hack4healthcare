var tamponApp = angular.module('tamponApp', [
    'ngRoute',
    'ngResource',
]);

tamponApp.config(function($routeProvider){
    $routeProvider
    .when('/#',{
        templateUrl: 'index.html',
    })
    .when('/#/registration',{
        templateUrl: 'registration.html',
    })
    .when('/#/login',{
        templateUrl: 'login.html',
    })
    .otherwise({
        redirectTo: '/#'
    });
});