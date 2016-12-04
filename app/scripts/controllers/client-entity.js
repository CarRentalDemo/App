'use strict';

angular.module('carRentalAppApp')
  .controller('ClientEntityCtrl', function ($busy, $scope, $location, $routeParams) {
    var self = this;
    self.id = $routeParams.id;

    var odata = o('Clients');

    $scope.model = {};
    if (self.id) {
      $busy.during(odata.find(self.id).get()).then(function(response) {
        $scope.model = response.data;
        delete $scope.model['@odata.context'];
        delete $scope.model.Id;
      });
    }
    
    $scope.saveData = function() {
      if (self.id) {
        $busy.during(odata.find(self.id).put($scope.model).save()).then(function(response) {
          $location.path('/clients-list');
        })
      } else {
        $busy.during(odata.post($scope.model).save()).then(function(response) {
          $location.path('/clients-list');
        })
      }
    };
  });
