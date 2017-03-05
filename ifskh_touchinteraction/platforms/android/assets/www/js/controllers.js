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

.controller('NaviCtrl', function($scope, $state, $cordovaGeolocation, NavDataService) {
  var currentPos;
  $scope.data = {
    "cities": [],
    "search": ''
  };

  $scope.search = function() {

    NavDataService.searchCities($scope.data.search).then(
      function(matches) {
        $scope.data.cities = matches;
      }
    )
  }


  var options = {timeout: 10000, enableHighAccuracy: true};
  
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    currentPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
       
    var mapOptions = {
      center: currentPos,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //Wait until the map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
     
      var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: currentPos
      });      
     
      var infoWindow = new google.maps.InfoWindow({
          content: "Here I am!"
      });
     
      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
      });
     
    });    
         
       
  }, function(error){
    console.log("Could not get location");
  });
<<<<<<< HEAD

  $scope.createDestination = function(){
    var regensburg = new google.maps.LatLng(49.0134297, 12.1016236);
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    var request = {
        origin : currentPos,
        destination : regensburg,
        travelMode : google.maps.TravelMode.DRIVING
    };
    
    directionsService.route(request, function(response, status)
    {
      if (status == google.maps.DirectionsStatus.OK)
      {
          directionsDisplay.setDirections(response);
      }
    });

  directionsDisplay.setMap($scope.map); 
  $scope.data = {
    "cities": [],
    "search": ''
  };  
};

$scope.replaceSearch = function(){
  $scope.data = {
    "cities": [],
    "search": ''
}
$scope.searchbar = document.getElementById("searchbar");
$scope.searchbar.placeholder = 'Regensburg';
};

});

/**
.controller('NaviCtrl', function ($scope, $ionicSideMenuDelegate, $cordovaGeolocation) {
    //$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    $ionicSideMenuDelegate.canDragContent(false)
    $scope.map = { center: { latitude: 40.1451, longitude: -99.6680 }, zoom: 8 };
    $scope.options = { scrollwheel: false, mapTypeId: "roadmap" };
    $scope.markericon = "img/moose.png";
    $scope.markers = []
    // get position of user and then set the center of the map to that position
    $cordovaGeolocation
      .getCurrentPosition()
      .then(function (position) {
          var lat = position.coords.latitude
          var long = position.coords.longitude
          $scope.map = { center: { latitude: lat, longitude: long }, zoom: 16 };
          //just want to create this loop to make more markers
          for (var i = 0; i < 3; i++) {
              $scope.markers.push({
                  id: $scope.markers.length,
                  latitude: lat + (i * 0.002),
                  longitude: long + (i * 0.002),
                  icon: $scope.markericon,
                  content: "I am located at " + lat + " ," + long
              });
          }
          $scope.onMarkerClick = function (marker, eventName, model) {
              model.show = !model.show;
          }

      }, function (err) {
          // error
      });
});
**/
=======
});
>>>>>>> origin/master
