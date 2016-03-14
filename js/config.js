var module = angular.module('myApp',['ngResource']);

module.config(['$routeProvider', function($routeProvider){
    $routeProvider.
            when('/',
            {templateUrl: '/js/views/main.html'}).
            when('/sports',
            {templateUrl: '/js/views/sports.html'}).
            otherwise({redirectTo: '/'});
}]);