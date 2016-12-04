'use strict';

describe('Controller: BookingsListCtrl', function () {

  // load the controller's module
  beforeEach(module('carRentalAppApp'));

  var BookingsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookingsListCtrl = $controller('BookingsListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookingsListCtrl.awesomeThings.length).toBe(3);
  });
});
