'use strict';

angular.module('bobApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, DataService) {
    $scope.awesomeThings = [];
    $scope.showProgressBar = false;
    $scope.showResults = false;
    $scope.max = 100;
    $scope.beacons = DataService.getBeacons();
    $scope.genomes = DataService.getGenomes();
    $scope.chromosomes = DataService.getChromosomes();
    $scope.alleles = DataService.getAlleles();
    console.log($scope.alleles);

    $scope.alerts = [
    // { type: 'danger', msg: 'Please select a beacon to query' }
    ];

    $scope.checkErrors = function() {
      //check for errors
      var flag = false;
      for(var i = 0; i<$scope.beacons.length; i++) {
        if($scope.beacons[i].checked == true) flag = true;
      }
      if(flag == false) {
        //User hasnt selected Beacons to query
        $scope.alerts = [];
        $scope.alerts.push({msg: 'HOME_ERROR_SELECT_BEACON', type: 'danger'});
        return;
      } else {
        //API calls to query these beacons
        $scope.alerts = [];
        $scope.alerts.push({msg: 'HOME_ENTER_BEACON_CONFIG', type: 'success'});
        // $scope.random();
        $scope.dynamic = 0;
        // $scope.showProgressBar = true;
        // $scope.dynamic = 100;
        $scope.showResults = true;
        
      }
    }

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    
    $scope.modelLabels = function(checkModel) {
      if(checkModel != true) return "Off";
      else return "On";
    }

    $scope.test = function() {
      console.log($scope.beacons);
    }

    $scope.$watch('beacons', function(newVal, oldVal) {
      console.log(newVal);
      $scope.checkErrors();
    }, true);
  });