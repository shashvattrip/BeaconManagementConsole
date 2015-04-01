'use strict';

angular.module('bobApp')
  .service('QueryService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var query = {beacons: false, genome: false, allele: false, position: false, chromosome: false};

    this.setQuery = function(data) {
    	this.query = data;
    }
    this.callQuery = function() {
			return this.query;    	
    }
  });
