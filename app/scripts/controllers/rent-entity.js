'use strict';

angular.module('carRentalAppApp')
  .controller('RentEntityCtrl', function ($routeParams, $scope, $busy, $location, common) {
    var self = this;
    self.id = $routeParams.id;
    self.bookingId = $routeParams.bookingId;

    var odata = o('Rents');

    $scope.bookings = [];
    $scope.clients = [];
    $scope.carTypes = [];

    $scope.model = {
      Client: {}
    };

    var promises = [];
    promises.push(o('BookingsForRent').filter('DateTo ge ' + new Date().toISOString()).expand('CarType,Client').orderBy('DateFrom,DateTo').get());
    promises.push(o('Clients').orderBy('FullName').get());
    promises.push(o('CarTypes').select('Id,Name').orderBy('Name').get());

    $scope.$watch('model.BookingId', function() {
      var booking = $scope.bookings.filter(function(item) {
        return item.Id == $scope.model.BookingId;
      })[0];

      if (!booking) {
        return;
      }

      $scope.model.DateFrom = booking.DateFrom;
      $scope.model.CarTypeId = booking.CarTypeId;

      $scope.isNewClient = false;
      $scope.model.ClientId = booking.ClientId;
      $scope.model.Client = common.copyObject(booking.Client);
    });

    $scope.$watch('isNewClient', function() {
      if ($scope.isNewClient) {
        $scope.model.ClientId = null;
        $scope.model.Client = {};
      }
    });

    $scope.$watch('model.ClientId', function() {
      if (!$scope.model.ClientId) {
        return;
      }

      var client = $scope.clients.filter(function(item) {
        return item.Id == $scope.model.ClientId;
      })[0];

      if (!client) {
        return;
      }

      $scope.model.Client = common.copyObject(client);
    });

    if (self.id) {
      $scope.isNewClient = false;

      promises.push(odata.find(self.id).expand('Booking($expand=CarType,Client)').get());
    } else {
      $scope.isNewClient = true;  
    }

    $busy.during(Q.all(promises)).then(function(responses){
      var bookings = responses[0].data;

      $scope.clients = responses[1].data;

      $scope.carTypes = responses[2].data;

      if (self.id) {
        $scope.model = responses[3].data;
        delete $scope.model['@odata.context'];
        delete $scope.model.Id;

        bookings.unshift($scope.model.Booking);
      }

      $scope.bookings = bookings.map(function(booking){
        booking.description = booking.CarType.Name + ' car from ' + moment(booking.DateFrom).format('YYYY-MM-DD HH:mm') + ' to ' + moment(booking.DateTo).format('YYYY-MM-DD HH:mm') + ' for ' + booking.Client.FullName
        return booking;
      });

      if (self.bookingId) {
        $scope.model.BookingId = parseInt(self.bookingId);
      }
    });
    
    $scope.saveData = function() {
      var promises = [];

      $scope.model.FullName = $scope.model.Client.FullName;
      $scope.model.Phones = $scope.model.Client.Phones;
      $scope.model.InsuranceNumber = $scope.model.Client.InsuranceNumber;

      delete $scope.model.Client.$$hashKey;
      delete $scope.model.Client.Id;

      if (!$scope.isNewClient) {
        var client = $scope.clients.filter(function(item) {
          return item.Id == $scope.model.ClientId;
        })[0];

        if (client.FullName != $scope.model.Client.FullName
          || client.Phones != $scope.model.Client.Phones
          || client.InsuranceNumber != $scope.model.Client.InsuranceNumber) {
          promises.push(o('Clients').find($scope.model.ClientId).put($scope.model.Client).save());
        }

        delete $scope.model.Client;
      }

      if (self.id) {
        promises.push(odata.find(self.id).put($scope.model).save());
      } else {
        promises.push(odata.post($scope.model).save());
      }

      $busy.during(Q.all(promises)).then(function(responses) {
        $location.path('/rents-list');
      });
    };
  });
