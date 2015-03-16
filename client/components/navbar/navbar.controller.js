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
      'requireAuth': 'true'
    },
    {
      'title': 'Favorite Beacons',
      'link': '/favbeacons',
      'requireAuth': 'true'
    }, 
    {
      'title': 'Beacon Stats', 
      'link': '/beaconstats',
      'requireAuth': 'true'
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