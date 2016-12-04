'use strict';

describe('Controller: RentsListCtrl', function () {

  // load the controller's module
  beforeEach(module('carRentalAppApp'));

  var RentsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RentsListCtrl = $controller('RentsListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RentsListCtrl.awesomeThings.length).toBe(3);
  });
});
