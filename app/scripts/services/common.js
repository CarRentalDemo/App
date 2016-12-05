'use strict';

/**
 * @ngdoc service
 * @name carRentalAppApp.common
 * @description
 * # common
 * Service in the carRentalAppApp.
 */
angular.module('carRentalAppApp')
  .service('common', function ($filter, ngTableParams) {
    var service = this;

    service.copyObject = function(obj) {
        return JSON.parse(JSON.stringify(obj));
    };

    service.getTableParams = function (tableData) {
        var sorting = {};
        var filtering = {};

        return new ngTableParams({
            page: 1,
            count: 50,
            sorting: sorting,
            filter: filtering
        }, {
            filterDelay: 1,
            total: tableData().length,
            counts: [],
            getData: function ($defer, p) {
                var params = p || {};

                var orderedData = tableData();

                if (params.sorting()) {
                    orderedData = $filter('orderBy')(orderedData, params.orderBy());
                }

                if (params.filter()) {
                    orderedData = $filter('filter')(orderedData, params.filter());
                    params.total(orderedData.length);
                }

                var data = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                $defer.resolve(data);
            }
        });
    };
  });
