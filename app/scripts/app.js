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
    'ngTouch',
    'ngTable',
    'ngHelperBusy',
    'ui.bootstrap.datetimepicker',
    'ui.dateTimeInput'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/car-type-entity', {
        templateUrl: 'views/car-type-entity.html',
        controller: 'CarTypeEntityCtrl',
        controllerAs: 'carTypeEntity'
      })
      .when('/car-type-entity/:id', {
        templateUrl: 'views/car-type-entity.html',
        controller: 'CarTypeEntityCtrl',
        controllerAs: 'carTypeEntity'
      })
      .when('/car-types-list', {
        templateUrl: 'views/car-types-list.html',
        controller: 'CarTypesListCtrl',
        controllerAs: 'carTypesList'
      })
      .when('/bookings-list', {
        templateUrl: 'views/bookings-list.html',
        controller: 'BookingsListCtrl',
        controllerAs: 'bookingsList'
      })
      .when('/booking-entity', {
        templateUrl: 'views/booking-entity.html',
        controller: 'BookingEntityCtrl',
        controllerAs: 'bookingEntity'
      })
      .when('/booking-entity/:id', {
        templateUrl: 'views/booking-entity.html',
        controller: 'BookingEntityCtrl',
        controllerAs: 'bookingEntity'
      })
      .when('/rent-entity', {
        templateUrl: 'views/rent-entity.html',
        controller: 'RentEntityCtrl',
        controllerAs: 'rentEntity'
      })
      .when('/rent-entity/:id', {
        templateUrl: 'views/rent-entity.html',
        controller: 'RentEntityCtrl',
        controllerAs: 'rentEntity'
      })
      .when('/rent-from-booking/:bookingId', {
        templateUrl: 'views/rent-entity.html',
        controller: 'RentEntityCtrl',
        controllerAs: 'rentEntity'
      })
      .when('/rents-list', {
        templateUrl: 'views/rents-list.html',
        controller: 'RentsListCtrl',
        controllerAs: 'rentsList'
      })
      .when('/clients-list', {
        templateUrl: 'views/clients-list.html',
        controller: 'ClientsListCtrl',
        controllerAs: 'clientsList'
      })
      .when('/client-entity', {
        templateUrl: 'views/client-entity.html',
        controller: 'ClientEntityCtrl',
        controllerAs: 'clientEntity'
      })
      .when('/client-entity/:id', {
        templateUrl: 'views/client-entity.html',
        controller: 'ClientEntityCtrl',
        controllerAs: 'clientEntity'
      })
      .when('/rent-close-entity/:id', {
        templateUrl: 'views/rent-close-entity.html',
        controller: 'RentCloseEntityCtrl',
        controllerAs: 'rentCloseEntity'
      })
      .when('/settings-list', {
        templateUrl: 'views/settings-list.html',
        controller: 'SettingsListCtrl',
        controllerAs: 'settingsList'
      })
      .when('/setting-entity', {
        templateUrl: 'views/setting-entity.html',
        controller: 'SettingEntityCtrl',
        controllerAs: 'settingEntity'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(config){
    o().config({
      endpoint: config.apiUrl + '/odata'
    });
  });
