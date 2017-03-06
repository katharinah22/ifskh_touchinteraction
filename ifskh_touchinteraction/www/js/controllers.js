angular.module('starter.controllers', ['rzModule', 'ui.bootstrap', 'ngCordova'])
    .controller('KlimaCtrl', function ($scope, $rootScope, $timeout, $uibModal) {

        var tempval = 23;
        var fanval = 1;
        //Vertical sliders
        $scope.verticalSlider3 = {
            value: tempval,
            options: {
                floor: 16,
                ceil: 30,
                vertical: true,
                //ticksArray: [20, 25, 30],
                showTicksValues: true,
                showSelectionBar: true,
                getSelectionBarColor: function(value) {
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
            value: fanval,
            options: {
                floor: 0,
                ceil: 6,
                vertical: true,
                showSelectionBar: true,
                showTicksValues: true,
                ticksValuesTooltip: function(v) {
                    return 'Tooltip for ' + v;
                }
            }
        };

        // init gesture recognition
        $scope.gesture = {
            used: ''
        };
        $scope.onGesture = function (gesture) {
            $scope.gesture.used = gesture;
            console.log(gesture);

            if ((gesture == "Swipe Up") || (gesture == "Drag Up")) { // turn up temperatur  
                tempval++;
                $scope.verticalSlider3 = {
                    value: tempval,
                    options: {
                        floor: 16,
                        ceil: 30,
                        vertical: true,
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

            } else if ((gesture == "Swipe Down") || (gesture == "Drag Down")) { // turn down temperatur
                tempval--;
                $scope.verticalSlider3 = {
                    value: tempval,
                    options: {
                        floor: 16,
                        ceil: 30,
                        vertical: true,
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
            } else if (gesture == "Swipe Left") { // turn up fan
                fanval++;
                $scope.verticalSlider6 = {
                    value: fanval,
                    options: {
                        floor: 0,
                        ceil: 6,
                        vertical: true,
                        showSelectionBar: true,
                        showTicksValues: true,
                        ticksValuesTooltip: function(v) {
                            return 'Tooltip for ' + v;
                        }
                    }
                };

            } else if (gesture == "Swipe Right") { // turn down fan
                fanval--;
                $scope.verticalSlider6 = {
                    value: fanval,
                    options: {
                        floor: 0,
                        ceil: 6,
                        vertical: true,
                        showSelectionBar: true,
                        showTicksValues: true,
                        ticksValuesTooltip: function(v) {
                            return 'Tooltip for ' + v;
                        }
                    }
                };

            }
        }
    })

    .controller('AudioCtrl', ['$scope', function ($scope, $ionicGesture) {

        // button play/ stop init
        $scope.count = 0;
        $scope.btnSSClick = "ion-play";

        // init gesture recognition
        $scope.gesture = {
            used: ''
        };

         $scope.myFunc = function() {
        $scope.count++;
        if ($scope.count % 2 == 0) { //gerader Countervalue
            $scope.btnSSClick = "ion-play";
        }
        else { //ungerader Countervalue
            $scope.btnSSClick = "ion-pause";
        }
    };

        $scope.onGesture = function (gesture) {
            $scope.gesture.used = gesture;
            console.log(gesture);

            if (gesture == "Double-Tap") { // start stop 
                $scope.count++;
                if ($scope.count % 2 == 0) { //gerader Countervalue
                    $scope.btnSSClick = "ion-play";
                } else { //ungerader Countervalue
                    $scope.btnSSClick = "ion-pause";
                }
            } else if (gesture == "Swipe Right") { //pervious track

            } else if (gesture == "Swipe Left") { //next track

            } else if (gesture == "Swipe Up") { // turn up volume           

            } else if (gesture == "Swipe Down") { // turn down volume

            }
        }
    
    }])

    .controller('NaviCtrl', function($scope, $state, $cordovaGeolocation, NavDataService) {
        var currentPos;
        var letterCount = 0;
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


        var options = {
            timeout: 10000,
            enableHighAccuracy: true
        };

        $cordovaGeolocation.getCurrentPosition(options).then(function(position) {

            currentPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var mapOptions = {
                center: currentPos,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
            //Wait until the map is loaded
            google.maps.event.addListenerOnce($scope.map, 'idle', function() {

                var marker = new google.maps.Marker({
                    map: $scope.map,
                    animation: google.maps.Animation.DROP,
                    position: currentPos
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: "Here I am!"
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infoWindow.open($scope.map, marker);
                });

            });


        }, function(error) {
            console.log("Could not get location");
        });

        $scope.createDestination = function() {
            var regensburg = new google.maps.LatLng(49.0134297, 12.1016236);
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();

            var request = {
                origin: currentPos,
                destination: regensburg,
                travelMode: google.maps.TravelMode.DRIVING
            };

            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });

            directionsDisplay.setMap($scope.map);
            $scope.data = {
                "cities": [],
                "search": ''
            };
        };

        $scope.replaceSearch = function() {
            $scope.data = {
                "cities": [],
                "search": ''
            }
            $scope.searchbar = document.getElementById("searchbar");
            $scope.searchbar.placeholder = 'Regensburg';
            letterCount = 10;
        };

        // init gesture recognition
        $scope.gesture = {
            used: ''
        };
        
        $scope.onGesture = function (gesture) {
            $scope.gesture.used = gesture;
            console.log(gesture);

            if (gesture == "Release") { // start stop 
                letterCount++;
                if (letterCount == 1) { //add new letter to searchbar
                    $scope.data.search = "R";
                } else if(letterCount == 2){
                    $scope.data.search = "Re";
                    $scope.search();
                } else if(letterCount == 3){
                    $scope.data.search = "Reg";
                    $scope.search();
                } else if(letterCount == 4){
                    $scope.data.search = "Rege";
                    $scope.search();
                } else if(letterCount == 5){
                    $scope.data.search = "Regen";
                    $scope.search();
                } else if(letterCount == 6){
                    $scope.data.search = "Regens";
                    $scope.search();
                } else if(letterCount > 6){
                    $scope.data.search = "Regensburg"
                }
            } else if (gesture == "Double-Tap") { //enter search
                if(letterCount >= 3){
                    letterCount = -1;
                    $scope.replaceSearch();
                    $scope.createDestination();
                } 
                
            } 
        }

    });