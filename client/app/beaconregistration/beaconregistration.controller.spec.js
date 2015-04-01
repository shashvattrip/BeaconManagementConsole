'use strict';

describe('Controller: BeaconregistrationCtrl', function () {

  // load the controller's module
  beforeEach(module('bobApp'));

  var BeaconregistrationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BeaconregistrationCtrl = $controller('BeaconregistrationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
