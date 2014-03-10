var menu = angular.module('menu', ['ui.bootstrap']);

menu.controller('menuCtrl', function ($scope) {
    // $scope.menu = [
    //     {
    //         name: 'sandwich',
    //         price: '120'
    //     },
    //     {
    //         name: 'waffle',
    //         price: '150'
    //     },
    //     {
    //         name: 'coffee',
    //         price: '100'
    //     }
    // ];

    $scope.food = [
        {
            name: 'sandwich',
            price: '120'
        },
        {
            name: 'waffle',
            price: '150'
        }
    ];

    $scope.drink = [
        {
            name: 'coffee',
            price: '100'
        },
        {
            name: 'black tea',
            price: '90'
        }
    ];

    $scope.newItem = {
        name: '',
        price: ''
    };

    $scope.newItemType = "food";

    $scope.addNewItem = function(){
        if ($scope.newItem.name === '' || $scope.newItem.price === '') {return};
        if($scope.newItemType === 'food'){
            $scope.food.push($scope.newItem);
        }else{
            $scope.drink.push($scope.newItem);
        }
        $scope.newItem = {
            name: '',
            price: ''
        };
    };
});