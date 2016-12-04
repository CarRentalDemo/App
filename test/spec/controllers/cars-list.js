'use strict';

describe('Controller: CarsListCtrl', function () {

  // load the controller's module
  beforeEach(module('carRentalAppApp'));

  var CarsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarsListCtrl = $controller('CarsListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarsListCtrl.awesomeThings.length).toBe(3);
  });
});
