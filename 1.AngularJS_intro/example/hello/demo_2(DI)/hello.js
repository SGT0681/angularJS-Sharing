var helloApp = angular.module('helloApp',['ui.bootstrap']);

helloApp.controller('helloCtrl', function($scope){
   $scope.name = 'roxanne'; 
   $scope.likes = ['apple', 'coffee'];
   $scope.skills = ['angaulrJS', 'java'];
});