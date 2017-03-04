angular.module('starter.controllers', ['rzModule', 'ui.bootstrap', 'ngCordova'])
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

.controller('AudioCtrl', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.btnSSClick = "ion-play";
    var iconval = $scope.btnSSClick;
    $scope.myFunc = function() {
        $scope.count++;
        if ($scope.count % 2 == 0) { //gerader Countervalue
            $scope.btnSSClick = "ion-play";
        }
        else { //ungerader Countervalue
            $scope.btnSSClick = "ion-pause";
        }
    };
}])

.controller('NaviCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
  }, function(error){
    console.log("Could not get location");
  });
});