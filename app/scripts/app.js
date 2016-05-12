'use strict';

/**
 * @ngdoc overview
 * @name lucaAppApp
 * @description
 * # lucaAppApp
 *
 * Main module of the application.
 */
angular
  .module('lucaAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'LucaCtrl',
        controllerAs: 'luca'
      })      
      .when('/test2', {
        templateUrl: 'views/test2.html',
        controller: 'Test2Ctrl',
        controllerAs: 'test2'
      })          
      .when('/elenco', {
        templateUrl: 'views/elenco.html',
        controller: 'ElencoCtrl',
        controllerAs: 'elenco'
      })         
      .otherwise({
        redirectTo: '/'
      });
  });
