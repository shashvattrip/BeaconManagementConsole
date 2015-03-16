'use strict';

angular.module('bobApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/',
      'requireAuth': 'false'
    }, 
    {
      'title': 'Saved Queries', 
      'link': '/queries',
      'requireAuth': 'false'
    },
    {
      'title': 'Favorite Beacons',
      'link': '/favbeacons',
      'requireAuth': 'false'
    }, 
    {
      'title': 'Beacon Stats', 
      'link': '/beaconstats',
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
  });