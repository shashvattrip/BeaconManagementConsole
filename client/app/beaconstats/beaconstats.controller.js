'use strict';

angular.module('bobApp')
  .controller('BeaconstatsCtrl', function ($scope) {
    $scope.message = 'Hello';
   	
   	$scope.labelsLine = ["January", "February", "March", "April", "May", "June", "July"];
	  // $scope.seriesLine = ['UCSC', 'Beacon2', 'AMP', 'NCBI'];
	  // $scope.dataLine = [
	  //   [65, 59, 80, 81, 56, 55, 40],
	  //   [88, 43, 50, 13, 66, 27, 90],
	  //   [38, 45, 80, 39, 36, 28, 20],
	  //   [18, 34, 90, 9, 82, 37, 30]
	  // ];
	  $scope.onClick = function (points, evt) {
	    console.log(points, evt);
	  };

	  $scope.labelsPie = ["UCSC", "Beacon2", "NCBI"];
  	$scope.dataPie = [300, 500, 100];

  	$scope.beacons = [ {
      "name":"AMP", 
      "checked":true
      },
      {
      "name":"Beacon4", 
      "checked":true
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

	  $scope.$watch('filter', function(newVal, oldVal) {
	  	//generate random data
	  	var tempDataLine = [];
	  	if(typeof $scope.seriesLine == "undefined") return;
	  	for(var i =0;i<$scope.seriesLine.length;i++) {
	  		var row = [];
				for(var j=0;j<7;j++) {
					row.push(Math.floor(Math.random() * 100 + 1));
				}
				tempDataLine.push(row);
	  	}
	  	$scope.dataLine = tempDataLine;
	  	//handling the pie chart
	  	$scope.labelsPie = tempDataLine;
	  	$scope.dataPie = [];
	  	for(var j=0;j<tempDataLine.length;j++) {
				$scope.dataPie.push(Math.floor(Math.random() * 100 + 1));
			}
	  }, true);

	  $scope.$watch('beacons', function(newVal, oldVal) {
	  	filterChanged(newVal, oldVal);
	  }, true);

		function filterChanged(newVal, oldVal) {
	  	var tempSeriesLine = [];
	  	var tempDataLine = [];

  		for(var i=0;i<newVal.length;i++){
  			if(newVal[i].checked == true) {
  				tempSeriesLine.push(newVal[i].name);
  			}
  		} 
			$scope.seriesLine = tempSeriesLine;	  	
	  	//generate random data
	  	for(var i =0;i<tempSeriesLine.length;i++) {
	  		var row = [];
				for(var j=0;j<7;j++) {
					row.push(Math.floor(Math.random() * 100 + 1));
				}
				tempDataLine.push(row);
	  	}
	  	$scope.dataLine = tempDataLine;
	  	//handling the pie chart
	  	$scope.labelsPie = tempSeriesLine;
	  	$scope.dataPie = [];
	  	for(var j=0;j<tempSeriesLine.length;j++) {
				$scope.dataPie.push(Math.floor(Math.random() * 100 + 1));
			}
		}
	  $scope.test = function() {
	  	console.log("test");
	  }

  });
