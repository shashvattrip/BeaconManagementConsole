'use strict';

angular.module('bobApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/results', {
        templateUrl: 'app/results/results.html',
        controller: 'ResultsCtrl'
      });
  });
