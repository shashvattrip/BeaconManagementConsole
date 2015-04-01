'use strict';
angular.module('bobApp')
  .service('DataService', function () {

    this.getBeacons = function() {
      var Beacons = [
      {
          "id": "thousandgenomes",
          "name": "1000 Genomes Project",
          "organization": "Google",
          "aggregator": false
      },
      {
          "id": "thousandgenomes-phase3",
          "name": "1000 Genomes Project - Phase 3",
          "organization": "Google",
          "aggregator": false
      },
      {
          "id": "amplab",
          "name": "AMPLab",
          "organization": "AMPLab, University of California",
          "aggregator": false
      },
      {
          "id": "bob",
          "name": "Beacon of Beacons",
          "organization": "Global Alliance for Genomics and Health",
          "aggregator": true
      },
      {
          "id": "broad",
          "name": "Broad Institute",
          "organization": "Broad Institute",
          "aggregator": false
      },
      {
          "id": "cafe-cardiokit",
          "name": "Cafe CardioKit",
          "organization": "University of Leicester",
          "aggregator": false
      },
      {
          "id": "cafe-variome",
          "name": "Cafe Variome",
          "organization": "University of Leicester",
          "aggregator": true
      },
      {
          "id": "cafe-central",
          "name": "Cafe Variome Central",
          "organization": "University of Leicester",
          "aggregator": false
      },
      {
          "id": "clinvar",
          "name": "ClinVar",
          "organization": "UCSC",
          "aggregator": false
      },
      {
          "id": "ebi",
          "name": "EMBL-EBI",
          "organization": "EBI",
          "aggregator": false
      },
      {
          "id": "curoverse-ref",
          "name": "GA4GH Example Data",
          "organization": "Curoverse",
          "aggregator": false
      },
      {
          "id": "google",
          "name": "Google Genomics Public Data",
          "organization": "Google",
          "aggregator": true
      },
      {
          "id": "icgc",
          "name": "ICGC",
          "organization": "Ontario Institute for Cancer Research",
          "aggregator": false
      },
      {
          "id": "platinum",
          "name": "Illumina Platinum Genomes",
          "organization": "Google",
          "aggregator": false
      },
      {
          "id": "kaviar",
          "name": "Known VARiants",
          "organization": "Institute for Systems Biology",
          "aggregator": false
      },
      {
          "id": "lovd",
          "name": "Leiden Open Variation",
          "organization": "UCSC",
          "aggregator": false
      },
      {
          "id": "ncbi",
          "name": "NCBI",
          "organization": "NCBI",
          "aggregator": false
      },
      {
          "id": "curoverse",
          "name": "PGP",
          "organization": "Curoverse",
          "aggregator": false
      },
      {
          "id": "uniprot",
          "name": "UniProt",
          "organization": "UCSC",
          "aggregator": false
      },
      {
          "id": "wtsi",
          "name": "Wellcome Trust Sanger Institute",
          "organization": "WTSI",
          "aggregator": false
      }
    ];
      return Beacons;
    }
    
    this.getGenomes = function() {
      var genomes = [
        {
            "value": "HG38"
        },
        {
            "value": "HG19"
        },
        {
            "value": "HG18"
        },
        {
            "value": "HG17"
        },
        {
            "value": "HG16"
        }
      ];
      return genomes;
    }

    this.getChromosomes = function() {
      var chromosomes = [
        {
            "value": "CHR22"
        },
        {
            "value": "CHR21"
        },
        {
            "value": "CHR20"
        },
        {
            "value": "CHR19"
        },
        {
            "value": "CHR18"
        },
        {
            "value": "CHR17"
        },
        {
            "value": "CHR16"
        },
        {
            "value": "CHR15"
        },
        {
            "value": "CHR14"
        },
        {
            "value": "CHR13"
        },
        {
            "value": "CHR12"
        },
        {
            "value": "CHR11"
        },
        {
            "value": "CHR10"
        },
        {
            "value": "CHR9"
        },
        {
            "value": "CHR8"
        },
        {
            "value": "CHR7"
        },
        {
            "value": "CHR6"
        },
        {
            "value": "CHR5"
        },
        {
            "value": "CHR4"
        },
        {
            "value": "CHR3"
        },
        {
            "value": "CHR2"
        },
        {
            "value": "CHR1"
        },
        {
            "value": "CHRX"
        },
        {
            "value": "CHRY"
        },
        {
            "value": "CHRMT"
        }
      ];
      return chromosomes;
    }

    this.getAlleles = function() {
      var alleles = [
        {
            "value": "A"
        },
        {
            "value": "C"
        },
        {
            "value": "G"
        },
        {
            "value": "T"
        },
        {
            "value": "D"
        },
        {
            "value": "I"
        }
      ];
      return alleles;
    }
  });