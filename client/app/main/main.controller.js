'use strict';

angular.module('bobApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.awesomeThings = [];
    $scope.showProgressBar = false;
    $scope.showResults = false;
    $scope.max = 100;
    $scope.results = [{
      exist_gt: true,
      exist_sra: true,
      query: {
        sender:'UCSC',
        allele: "C",
        chrom: "912",
        pos: "1362542908",
        ref: "GRCh11"
        }
      }, 
      {
      exist_gt: false,
      exist_sra: true,
      query: {
        sender:'AMP',
        allele: "A",
        chrom: "95",
        pos: "1361908",
        ref: "GRCh78"
        }
      },
      {
      exist_gt: false,
      exist_sra: false,
      query: {
        sender:'NCBI',
        allele: "G",
        chrom: "92",
        pos: "176122908",
        ref: "GRCh55"
        }
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
    // { type: 'danger', msg: 'Please select a beacon to query' },
    // { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

    $scope.checkErrors = function() {
      //check for errors
      console.log($scope.checkModel);
      if(typeof($scope.checkModel) == "undefined") {
        //User hasnt selected Beacons to query
        $scope.alerts.push({msg: 'Please select a beacon to query', type: 'danger'});
      } else {
        //API calls to query these beacons
        $scope.alerts = [];
        $scope.alerts.push({msg: 'Beacons have been queried', type: 'success'});
        // $scope.random();
        $scope.dynamic = 0;
        $scope.showProgressBar = true;
        $timeout(function() {
          $scope.dynamic = 100;
          $scope.showResults = true;
        }, 1000);      
      }
    }

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    

    
    

  });
