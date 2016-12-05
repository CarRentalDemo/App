'use strict';

angular.module('carRentalAppApp')
  .controller('BookingsListCtrl', function ($scope, $busy, common) {
    var self = this;

    var odata = o('Bookings');

    self.tableData = [];
    self.getData = function() {
      return self.tableData;
    };

    $scope.tableParams = common.getTableParams(self.getData);

    $scope.deleteRecord = function(id) {
      if (!confirm('Are you sure want to delete it?')) {
        return;
      }

      $busy.during(odata.find(id).remove().save()).then(function(response){
        $scope.refreshData();
      });
    };

    $scope.refreshData = function() {
      odata = o('Bookings');
      
      $busy.during(odata.expand('CarType,Client,Rents').orderBy('DateFrom,DateTo').get()).then(function(response){
        self.tableData = response.data.map(function(item) {
          item.isRented = item.Rents.length != 0;
          item.isPastDue = Date.parse(item.DateTo) < new Date();
          item.isRentAvailable = !item.isPastDue && !item.isRented;
          
          item.dateFromString = moment(item.DateFrom).format('YYYY-MM-DD HH:mm');
          item.dateToString = moment(item.DateTo).format('YYYY-MM-DD HH:mm');
          return item;
        });
        $scope.tableParams.reload();
      });
    }

    $scope.refreshData();
  });
