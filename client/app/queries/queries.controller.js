'use strict';

angular.module('bobApp')
  .controller('QueriesCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.tabs = [
	    { title:'History', content:'Dynamic content 1' },
	    { title:'Groups', content:'Dynamic content 2' }
  	];

  	$scope.queries = [
  		{
  			'request': 'GET',
  			'label': 'Allele',
  			'success': true,
  			'star': true,
  			'group': 1
  		},
  		{
  			'request': 'GET',
  			'label': 'Chrom',
  			'success': true,
  			'star': true,
  			'group': 2
  		},
  		{
  			'request': 'GET',
  			'label': 'AT',
  			'success': true,
  			'star': false,
  			'group': 1
  		},
  		{
  			'request': 'GET',
  			'label': 'XY',
  			'success': false,
  			'star': true,
  			'group': 1
  		},
  		{
  			'request': 'GET',
  			'label': 'Chrom',
  			'success': true,
  			'star': false,
  			'group': 2
  		},
  		{
  			'request': 'GET',
  			'label': 'Chrom',
  			'success': true,
  			'star': false,
  			'group': 2
  		},
  		{
  			'request': 'GET',
  			'label': 'Allele',
  			'success': true,
  			'star': true,
  			'group': 1
  		},
  		{
  			'request': 'GET',
  			'label': 'GC',
  			'success': false,
  			'star': false,
  			'group': 1
  		},
  		{
  			'request': 'GET',
  			'label': 'AT',
  			'success': false,
  			'star': false,
  			'group': 2
  		},
  		{
  			'request': 'GET',
  			'label': 'Chrom2',
  			'success': true,
  			'star': true,
  			'group': 2
  		}
  	];

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
  });
