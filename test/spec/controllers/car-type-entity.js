'use strict';

describe('Controller: CarTypeEntityCtrl', function () {

  // load the controller's module
  beforeEach(module('carRentalAppApp'));

  var CarTypeEntityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarTypeEntityCtrl = $controller('CarTypeEntityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarTypeEntityCtrl.awesomeThings.length).toBe(3);
  });
});
