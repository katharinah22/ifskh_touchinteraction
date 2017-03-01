angular.module('starter.controllers', ['rzModule', 'ui.bootstrap'])
//.directive('clickableLabel', function () {
//    return {
//        restrict: 'E',
//        scope: { label: '=' },
//        replace: true,
//        template: "<button ng-click='onclick(label)' style='cursor: pointer;'>click me - {{label}}</button>",
//        link: function (scope, elem, attrs) {
//            scope.onclick = function (label) {
//                alert("I'm " + label);
//            };
//        }
//    };
//})

.controller('KlimaCtrl', function ($scope, $rootScope, $timeout, $uibModal) {
    //Vertical sliders
    $scope.verticalSlider3 = {
        value: 23,
        options: {
            floor: 16,
            ceil: 30,
            vertical: true,
            //ticksArray: [20, 25, 30],
            showTicksValues: true,
            showSelectionBar: true,
            getSelectionBarColor: function (value) {
                if (value <= 20)
                    return '#24a9d6'; // blue
                if (value <= 25)
                    return '#f9f907'; // yellow
                if (value <= 30)
                    return '#e2510d'; // red
                return '#2AE02A';
            }
        }
    };

    $scope.verticalSlider6 = {
        value: 1,
        options: {
            floor: 0,
            ceil: 6,
            vertical: true,
            showSelectionBar: true,
            showTicksValues: true,
            ticksValuesTooltip: function (v) {
                return 'Tooltip for ' + v;
            }
        }
    };

})

.controller('AudioCtrl', function ($scope, $rootScope, $timeout, $uibModal) {


})


.controller('NaviCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
});