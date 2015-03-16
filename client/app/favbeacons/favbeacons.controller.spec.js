'use strict';

describe('Controller: FavbeaconsCtrl', function () {

  // load the controller's module
  beforeEach(module('bobApp'));

  var FavbeaconsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavbeaconsCtrl = $controller('FavbeaconsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
