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

  	$scope.beacons = [ {
      "name":"AMP", 
      "checked":false
      },
      {
      "name":"Beacon4", 
      "checked":false
      },
      {
      "name":"UCSC", 
      "checked":false
      },
      {
      "name":"NCBI", 
      "checked":false
      }];

      $scope.modelLabels = function(checkModel) {
      if(checkModel != true) return "Off";
      else return "On";
    	}

    	//datepicker functions
    	$scope.today = function() {
	    $scope.dt = new Date();
		  };
		  $scope.today();

		  $scope.clear = function () {
		    $scope.dt = null;
		  };

		  // Disable weekend selection
		  $scope.disabled = function(date, mode) {
		    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		  };

		  $scope.toggleMin = function() {
		    $scope.minDate = $scope.minDate ? null : new Date();
		  };
		  $scope.toggleMin();

		  $scope.open = function($event) {
		    $event.preventDefault();
		    $event.stopPropagation();

		    $scope.opened = true;
		  };

		  $scope.dateOptions = {
		    formatYear: 'yy',
		    startingDay: 1
		  };

		  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		  $scope.format = $scope.formats[0];

  });
