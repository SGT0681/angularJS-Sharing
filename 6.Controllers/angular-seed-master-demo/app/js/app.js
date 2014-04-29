'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/broadcast_emit', {templateUrl: 'partials/broadcast_emit.html', controller: 'EventController'});
  $routeProvider.when('/timepicker', {templateUrl: 'partials/timepicker.html', controller: 'TimepickerController'});
  $routeProvider.when('/tabPane', {templateUrl: 'partials/tabPane.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/timepicker'});
}]);
