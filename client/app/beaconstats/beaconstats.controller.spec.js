'use strict';

describe('Controller: BeaconstatsCtrl', function () {

  // load the controller's module
  beforeEach(module('bobApp'));

  var BeaconstatsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BeaconstatsCtrl = $controller('BeaconstatsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
