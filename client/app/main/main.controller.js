'use strict';

angular.module('bobApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.awesomeThings = [];
    $scope.showProgressBar = false;
    $scope.showResults = false;
    $scope.max = 100;
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
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };


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
        $scope.alerts.push({msg: 'Please select a beacon to query', type: 'danger'});
        return;
      } else {
        //API calls to query these beacons
        $scope.alerts = [];
        $scope.alerts.push({msg: 'Please enter configs for the following beacons', type: 'success'});
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