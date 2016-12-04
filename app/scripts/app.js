'use strict';

/**
 * @ngdoc overview
 * @name carRentalAppApp
 * @description
 * # carRentalAppApp
 *
 * Main module of the application.
 */
angular
  .module('carRentalAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
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
      })
      .otherwise({
        redirectTo: '/'
      });
  });
