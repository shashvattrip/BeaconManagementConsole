'use strict';

angular.module('bobApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $translate) {
    $scope.menu = [{
      'title': 'NAVBAR_HOME',
      'link': '/',
      'requireAuth': 'false'
    }, 
    {
      'title': 'NAVBAR_SAVED_QUERIES', 
      'link': '/queries',
      'requireAuth': 'false'
    },
    {
      'title': 'NAVBAR_FAV_BEACONS',
      'link': '/favbeacons',
      'requireAuth': 'false'
    }, 
    {
      'title': 'NAVBAR_BEACON_STATISTICS', 
      'link': '/beaconstats',
      'requireAuth': 'false'
    }, 
    {
      'title': 'NAVBAR_BEACON_REGISTRATION', 
      'link': '/beaconregistration',
      'requireAuth': 'false'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.changeLanguage = function(langKey) {
      $translate.use(langKey);
    }


  });