'use strict';

angular.module('bobApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'chart.js',
  'pascalprecht.translate'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider, $translateProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', {
      'HELLO_WORLD':"Hello, World",
      'WHAT_BEACONS_DO_YOU_WANT_TO_QUERY':"What beacons do you want to query?",
      'NAVBAR_HOME':'Home',
      'NAVBAR_SAVED_QUERIES':'Saved Queries',
      'NAVBAR_FAV_BEACONS':'Favorite Beacons',
      'NAVBAR_BEACON_STATISTICS':'Beacon Statistics',
      'NAVBAR_LOGIN':'Login',
      'HOME_ERROR_SELECT_BEACON':'Please select atleast one beacon to query',
      'HOME_BTN_GO':'Go!',
      'HOME_ENTER_BEACON_CONFIG':'Please enter configs for the following beacons', 
      'NAVBAR_BEACON_REGISTRATION':"Beacon Registration"

    })
    .translations('de', {
      'HELLO_WORLD': 'hallo welt',
      'WHAT_BEACONS_DO_YOU_WANT_TO_QUERY':'Welche Baken möchten Sie abfragen?',
      'NAVBAR_HOME':'Nach Hause',
      'NAVBAR_SAVED_QUERIES':'Gespeicherte Abfragen',
      'NAVBAR_FAV_BEACONS':'Lieblings Beacons',
      'NAVBAR_BEACON_STATISTICS':'Beacon Statistik',
      'NAVBAR_LOGIN':'Einloggen',
      'HOME_ERROR_SELECT_BEACON':'Bitte wählen Sie ein Leuchtfeuer abfragen',
      'HOME_BTN_GO':'gehen!',
      'HOME_ENTER_BEACON_CONFIG':'Bitte geben Sie Konfigurationen für die folgenden Beacons'
    });
    $translateProvider.preferredLanguage('en');
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });