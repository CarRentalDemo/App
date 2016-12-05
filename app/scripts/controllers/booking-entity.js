'use strict';

angular.module('carRentalAppApp')
  .controller('BookingEntityCtrl', function ($scope, $busy, $routeParams, $location) {
    var self = this;
    self.id = $routeParams.id;

    var odata = o('Bookings');

    $scope.carTypes = [];
    $scope.clients = [];

    $scope.model = {
      Client: {}
    };

    var promises = [];
    promises.push(o('CarTypes').select('Id,Name').orderBy('Name').get());

    if (self.id) {
      $scope.isNewClient = false;

      promises.push(odata.find(self.id).get());
      promises.push(o('Clients').select('Id,FullName').orderBy('FullName').get());
    } else {
      $scope.isNewClient = true;

      var watch = $scope.$watch('isNewClient', function() {
        if ($scope.isNewClient && $scope.clients == 0) {
          watch();
          $busy.during(o('Clients').select('Id,FullName').orderBy('FullName').get()).then(function(response) {
            $scope.clients = response.data;
          });
        }
      });      
    }

    $busy.during(Q.all(promises)).then(function(responses){
      $scope.carTypes = responses[0].data;

      if (self.id) {
        $scope.model = responses[1].data;
        delete $scope.model['@odata.context'];
        delete $scope.model.Id;

        $scope.clients = responses[2].data;
      }
    });
    
    $scope.saveData = function() {
      if (!$scope.isNewClient) {
        delete $scope.model.Client;
      }

      if (self.id) {
        $busy.during(odata.find(self.id).put($scope.model).save()).then(function(response) {
          $location.path('/bookings-list');
        })
      } else {
        $busy.during(odata.post($scope.model).save()).then(function(response) {
          alert('Booking code is ' + response.data.Id + '.');
          $location.path('/bookings-list');
        })
      }
    };

  });
