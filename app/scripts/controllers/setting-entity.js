'use strict';

angular.module('carRentalAppApp')
  .controller('SettingEntityCtrl', function ($scope, $busy, $location, config, $http) {
    var self = this;

    $scope.model = {};
    
    $busy.during($http.get(config.apiUrl + '/api/Settings')).then(function(response){
      $scope.model = response.data;
    });

    $scope.saveData = function() {
      $busy.during($http.put(config.apiUrl + '/api/Settings', $scope.model)).then(function(response){
        $location.path('/settings-list');
      });
    };
  });
