'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('TimepickerController', ['$scope', function($scope) {
      $scope.timeOfDay = 0;
      $scope.resetTime = function(){    
         var today = new Date();               
         $scope.timeOfDay = today.getTime();      
      }
  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('EventController', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.$on('MyEvent', function() {
      $scope.count++;
    });
  }]);
