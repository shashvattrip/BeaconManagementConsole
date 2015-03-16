'use strict';

angular.module('bobApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/beaconstats', {
        templateUrl: 'app/beaconstats/beaconstats.html',
        controller: 'BeaconstatsCtrl'
      });
  });
