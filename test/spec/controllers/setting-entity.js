'use strict';

describe('Controller: SettingEntityCtrl', function () {

  // load the controller's module
  beforeEach(module('carRentalAppApp'));

  var SettingEntityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SettingEntityCtrl = $controller('SettingEntityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SettingEntityCtrl.awesomeThings.length).toBe(3);
  });
});
