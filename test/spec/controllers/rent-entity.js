'use strict';

describe('Controller: RentEntityCtrl', function () {

  // load the controller's module
  beforeEach(module('carRentalAppApp'));

  var RentEntityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RentEntityCtrl = $controller('RentEntityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RentEntityCtrl.awesomeThings.length).toBe(3);
  });
});
