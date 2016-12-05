'use strict';

angular.module('carRentalAppApp')
  .controller('MainCtrl', function ($scope, $location, $busy) {
    $scope.id = null;

    $scope.gotoRentOpen = function(){
      $busy.during(o('Bookings').select('Id').filter('Id eq ' + $scope.id).get()).then(function(response){
        var length = response.data.length;

        if (length != 0) {
          $location.path('/rent-from-booking/' + $scope.id);
        } else {
          alert('Booking by this id was not found.');
        }
      });
    };

    $scope.gotoRentClose = function(){
      $busy.during(o('Bookings').expand('Rents($select=Id,FinalPrice)').select('Rents').filter('Id eq ' + $scope.id).get()).then(function(response){
        var id = null;

        if (response.data.length != 0) {
          if (response.data[0].Rents.length != 0) {
            if (!response.data[0].Rents[0].FinalPrice) {
              id = response.data[0].Rents[0].Id;
            }
          }
        }
        
        if (id) {
          $location.path('/rent-close-entity/' + id);
        } else {
          alert('Booking by this id was not found or it has no open rent.');
        }
      });
    };
  });
