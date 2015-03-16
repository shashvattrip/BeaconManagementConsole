'use strict';

angular.module('bobApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/queries', {
        templateUrl: 'app/queries/queries.html',
        controller: 'QueriesCtrl'
      });
  });
