angular.module('starter.controllers', ['rzModule', 'ui.bootstrap'])

.controller('KlimaCtrl', function ($scope, $rootScope, $timeout, $uibModal) {

    //Slider config with steps array of letters
    $scope.slider_alphabet = {
        value: 'E',
        options: {
            stepsArray: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        }
    };

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

});

app.directive('clickableLabel', function () {
    return {
        restrict: 'E',
        scope: { label: '=' },
        replace: true,
        template: "<button ng-click='onclick(label)' style='cursor: pointer;'>click me - {{label}}</button>",
        link: function (scope, elem, attrs) {
            scope.onclick = function (label) {
                alert("I'm " + label);
            };
        }
    };
})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
