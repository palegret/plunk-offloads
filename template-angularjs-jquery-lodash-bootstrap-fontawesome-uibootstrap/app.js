(function () {
    'use strict';
    
    window.app = angular.module('App', [
        'ngRoute', 
        'ngAnimate', 
        'ui.bootstrap'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'view-home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);    
}());
