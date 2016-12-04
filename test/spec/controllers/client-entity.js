'use strict';

describe('Controller: ClientEntityCtrl', function () {

  // load the controller's module
  beforeEach(module('carRentalAppApp'));

  var ClientEntityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientEntityCtrl = $controller('ClientEntityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientEntityCtrl.awesomeThings.length).toBe(3);
  });
});
