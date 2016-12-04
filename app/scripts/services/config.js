'use strict';

/**
 * @ngdoc service
 * @name carRentalAppApp.config
 * @description
 * # config
 * Service in the carRentalAppApp.
 */
angular.module('carRentalAppApp')
  .service('config', function () {
    var self = this;

    self.apiUrl = 'http://localhost:3100';
  });
