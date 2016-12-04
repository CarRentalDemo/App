'use strict';

angular.module('carRentalAppApp')
  .controller('BookingsListCtrl', function ($scope, NgTableParams, $busy) {
    var self = this;

    var odata = o('Bookings');

    self.tableData = [];
    self.getData = function() {
      return self.tableData;
    };

    $scope.tableParams = new NgTableParams({}, { getData: self.getData, filterDelay: 1 });

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
      
      $busy.during(odata.expand('CarType,Client').orderBy('DateFrom,DateTo').get()).then(function(response){
        self.tableData = response.data;
        $scope.tableParams.reload();
      });
    }

    $scope.refreshData();
  });
