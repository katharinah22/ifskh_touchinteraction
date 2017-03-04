angular.module('starter.navdata', [])

.factory('NavDataService', function($q, $timeout) {
var cities = ["Aachen", "Amberg", "Berlin", "Cottbus", "Dachau", "Duesseldorf", "Erfurt", "Frankfurt", "Freiburg", "Kelheim", "Leibzig", "Muenchen", "Nuernberg", "Oldenburg", "Passau", "Ravensburg", "Remstadt", "Regensburg", "Saal a. d. Donau", "Schweinfurt", "Schwerin", "Wuerzburg", "Zwickau"];

  var searchCities = function(searchFilter) {

    console.log('Searching cities for ' + searchFilter);

    var deferred = $q.defer();

    var matches = cities.filter(function(city) {
      if (city.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1) return true;
    })

    $timeout(function() {

      deferred.resolve(matches);

    }, 100);

    return deferred.promise;

  };

  return {

    searchCities: searchCities

  }
})
