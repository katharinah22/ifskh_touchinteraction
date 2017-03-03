angular.module('starter.controllers', ['rzModule', 'ui.bootstrap'])

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

.controller('NaviCtrl', function ($scope, $ionicLoading) {

    //// Getting the map selector in DOM
    //var div = document.getElementById("map");

    

    //// Invoking Map using Google Map SDK v2 by dubcanada
    //var map = plugin.google.getMap(div);
      
    //google.maps.event.addDomListener(window, 'load', function () {
    //    var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

    //    var mapOptions = {
    //        center: myLatlng,
    //        zoom: 16,
    //        mapTypeId: google.maps.MapTypeId.ROADMAP
    //    };

    //    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //    navigator.geolocation.getCurrentPosition(function (pos) {
    //        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    //        var myLocation = new google.maps.Marker({
    //            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
    //            map: map,
    //            title: "My Location"
    //        });
    //    });

    //    $scope.map = map;
    //});


});