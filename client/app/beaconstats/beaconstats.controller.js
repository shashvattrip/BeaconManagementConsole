'use strict';

angular.module('bobApp')
  .controller('BeaconstatsCtrl', function ($scope) {
    $scope.message = 'Hello';
   	$scope.labelsLine = ["January", "February", "March", "April", "May", "June", "July"];
	  $scope.seriesLine = ['UCSC', 'Beacon2'];
	  $scope.dataLine = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	  ];
	  $scope.onClick = function (points, evt) {
	    console.log(points, evt);
	  };
	  $scope.labelsPie = ["UCSC", "Beacon2", "NCBI"];
  	$scope.dataPie = [300, 500, 100];

  });
