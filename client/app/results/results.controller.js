'use strict';

angular.module('bobApp')
  .controller('ResultsCtrl', function ($scope, QueryService) {
    $scope.message = 'Hello';
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
      $scope.query = QueryService.callQuery();
  });
