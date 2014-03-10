var menu = angular.module('menu', []);

menu.controller('menuCtrl', function ($scope) {
    $scope.menu = [
        {
            name: 'sandwich',
            price: '120'
        },
        {
            name: 'waffle',
            price: '150'
        },
        {
            name: 'coffee',
            price: '100'
        }
    ];

    $scope.newItem = {
        name: '',
        price: ''
    };
});