'use strict';

angular.module('bobApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/beaconregistration', {
        templateUrl: 'app/beaconregistration/beaconregistration.html',
        controller: 'BeaconregistrationCtrl'
      });
  });
