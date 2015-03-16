'use strict';

angular.module('bobApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/favbeacons', {
        templateUrl: 'app/favbeacons/favbeacons.html',
        controller: 'FavbeaconsCtrl'
      });
  });
