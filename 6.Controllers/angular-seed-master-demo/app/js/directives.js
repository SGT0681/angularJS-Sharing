'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('timepicker', function(){
    var today = new Date(new Date().toDateString());
    return {
        require: '?ngModel',
        priority: 1,
        link: function($scope, $element, $attrs, ngModel){
            ngModel = ngModel || {"$setViewValue" : angular.noop};         
            var initialized = false;
            
            setTimeout(function(){
                initialized = $element.timepicker().on('changeTime', function(ev, ui){
                    var sec = $element.timepicker('getSecondsFromMidnight');
                    ngModel.$setViewValue(sec * 1000);                   
                    
                });
            });
            
            ngModel.$render = function(val){   
                if(!initialized){
                    return; 
                }
                
                if(val){
                	$element.timepicker('setTime', new Date(today.getTime() + val));
                }else{
                    $element.timepicker('setTime', new Date($scope.timeOfDay));
                }
            };             
        }
    }
  })
  .directive('myTabs', function() {
      return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function($scope) {
          var panes = $scope.panes = [];

          $scope.select = function(pane) {
            angular.forEach(panes, function(pane) {
              pane.selected = false;
            });
            pane.selected = true;
          };

          this.addPane = function(pane) {
            if (panes.length === 0) {
              $scope.select(pane);
            }
            panes.push(pane);
          };
        },
        templateUrl: 'partials/my-tabs.html'
      };
    })
    .directive('myPane', function() {
      return {
        require: '^myTabs',
        restrict: 'E',
        transclude: true,
        scope: {
          title: '@'
        },
        link: function(scope, element, attrs, tabsCtrl) {
          tabsCtrl.addPane(scope);
        },
        templateUrl: 'partials/my-pane.html'
      };
    });