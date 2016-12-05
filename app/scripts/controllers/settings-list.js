'use strict';

angular.module('carRentalAppApp')
  .controller('SettingsListCtrl', function ($scope, $busy, config) {
    var self = this;

    $scope.model = {};

    $scope.refreshData = function() {
      $busy.beBusy();
      $.ajax({
        accepts: 'application/json',
        contentType: 'application/json',
        method: 'GET',
        url: config.apiUrl + "/api/Settings",
      }).done(function(data) {
        $busy.beFree();
        $scope.model = data;
        $scope.$apply();
      });
    }

    $scope.refreshData();
  });
