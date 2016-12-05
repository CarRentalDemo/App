'use strict';

angular.module('carRentalAppApp')
  .controller('SettingEntityCtrl', function ($scope, $busy, $location, config) {
    var self = this;

    $scope.model = {};
    
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

    $scope.saveData = function() {
      $busy.beBusy();
      $.ajax({
        accepts: 'application/json',
        contentType: 'application/json',
        method: 'PUT',
        data: JSON.stringify($scope.model),
        url: config.apiUrl + "/api/Settings",
      }).done(function(data) {
        $busy.beFree();
        $location.path('/settings-list');
        $scope.$apply();
      });
    };
  });
