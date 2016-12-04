'use strict';

describe('Controller: BookingEntityCtrl', function () {

  // load the controller's module
  beforeEach(module('carRentalAppApp'));

  var BookingEntityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookingEntityCtrl = $controller('BookingEntityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookingEntityCtrl.awesomeThings.length).toBe(3);
  });
});
