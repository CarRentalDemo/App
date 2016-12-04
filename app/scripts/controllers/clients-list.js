'use strict';

angular.module('carRentalAppApp')
  .controller('ClientsListCtrl', function ($scope, $busy, NgTableParams) {
    var self = this;

    var odata = o('Clients');

    self.tableData = [];
    self.getData = function() {
      return self.tableData;
    };

    $scope.tableParams = new NgTableParams({}, { getData: self.getData });

    $scope.deleteRecord = function(id) {
      if (!confirm('Are you sure want to delete it?')) {
        return;
      }

      $busy.during(odata.find(id).remove().save()).then(function(response){
        $scope.refreshData();
      });
    };

    $scope.refreshData = function() {
      odata = o('Clients');
      
      $busy.during(odata.orderBy('FullName').get()).then(function(response){
        self.tableData = response.data;
        $scope.tableParams.reload();
      });
    }

    $scope.refreshData();
  });
