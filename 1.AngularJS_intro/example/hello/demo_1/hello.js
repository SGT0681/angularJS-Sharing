var helloApp = angular.module('helloApp',[]);

helloApp.controller('helloCtrl', function($scope){
   $scope.name = 'roxanne'; 
   $scope.likes = ['apple', 'coffee'];
});