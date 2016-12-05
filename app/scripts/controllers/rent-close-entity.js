'use strict';

/**
 * @ngdoc function
 * @name carRentalAppApp.controller:RentCloseEntityCtrl
 * @description
 * # RentCloseEntityCtrl
 * Controller of the carRentalAppApp
 */
angular.module('carRentalAppApp')
  .controller('RentCloseEntityCtrl', function ($scope, $busy, $routeParams, $location, $http, config) {
    var self = this;
    self.id = $routeParams.id;

    $scope.model = {
      CarType: {},
      Booking: {}
    };

    $busy.during(o('Rents').find(self.id).expand('CarType,Booking($expand=CarType,Client)').get()).then(function(response){
      $scope.model = response.data;

      $scope.model.Booking.description = $scope.model.Booking.CarType.Name + ' car from ' + moment($scope.model.Booking.DateFrom).format('YYYY-MM-DD HH:mm') + ' to ' + moment($scope.model.Booking.DateTo).format('YYYY-MM-DD HH:mm') + ' for ' + $scope.model.Booking.Client.FullName

      delete $scope.model['@odata.context'];
      delete $scope.model.Id
    });

    $scope.getFinalPrice = function() {
      var model = {
        DateFrom: $scope.model.DateFrom,
        DateTo: $scope.model.DateTo,
        InitialMileage: $scope.model.InitialMileage,
        FinalMileage: $scope.model.FinalMileage,
        CarTypeId: $scope.model.CarTypeId
      };

      if (!model.DateTo || !model.FinalMileage) {
        return;
      }

      $busy.during($http.post(config.apiUrl + '/api/Pricing/FinalPrice', model)).then(function(response){
        console.log(response);
        $scope.model.FinalPrice = response.data;
      });
    };

    $scope.saveData = function() {
      $busy.during(odata.find(self.id).put($scope.model).save()).then(function(response) {
        $location.path('/rents-list');
      })
    };
  });
