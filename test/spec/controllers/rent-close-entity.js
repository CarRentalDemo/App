'use strict';

describe('Controller: RentCloseEntityCtrl', function () {

  // load the controller's module
  beforeEach(module('carRentalAppApp'));

  var RentCloseEntityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RentCloseEntityCtrl = $controller('RentCloseEntityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RentCloseEntityCtrl.awesomeThings.length).toBe(3);
  });
});
