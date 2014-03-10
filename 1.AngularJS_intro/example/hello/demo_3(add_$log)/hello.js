var helloApp = angular.module('helloApp',['ui.bootstrap']);

helloApp.controller('helloCtrl', ['$scope', '$log',
    function($scope, $log){
   $scope.name = 'roxanne'; 
   $scope.likes = ['apple', 'coffee', 'banana'];
   $scope.skills = ['angaulrJS', 'java'];
   $log.info('test log');
}]);