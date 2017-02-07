(function(){

    'use strict';

    angular.module('angulartest', ['ui.router', 'ngResource', 'ngMessages'])

    angular.module('angulartest').config(function($locationProvider, $stateProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {                
                controller: 'homeController',
                controllerAs: 'vmHome',
                templateUrl: 'views/home.html',
                url: '/',
            })
    });

})();