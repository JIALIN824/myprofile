'use strict';

/**
 * @ngdoc overview
 * @name profileApp
 * @description
 * # profileApp
 *
 * Main module of the application.
 */
angular
  .module('profileApp', [
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
      .when('/CV', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl',
        controllerAs: 'CV'
      })
      .when('/Project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'Project'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
