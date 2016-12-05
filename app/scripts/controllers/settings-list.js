'use strict';

angular.module('carRentalAppApp')
  .controller('SettingsListCtrl', function ($scope, $busy, config, $http) {
    var self = this;

    $scope.model = {};

    $scope.refreshData = function() {
      $busy.during($http.get(config.apiUrl + '/api/Settings')).then(function(response){
        $scope.model = response.data;
      });
    }

    $scope.refreshData();
  });
