/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.maps')
      .controller('GmapPageCtrl', GmapPageCtrl);

  /** @ngInject */
  function GmapPageCtrl($scope, $http, $timeout) {
    function initialize() {
      var mapCanvas = document.getElementById('google-maps');
      var mapOptions = {
        center: new google.maps.LatLng(-5.162223, 119.437690),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var markers = [];
        var latLng = new google.maps.LatLng(44.5403, -78.5463);
        var marker = new google.maps.Marker({'position': latLng});
        markers.push(marker);
      var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'images/m'});
    }

    $timeout(function(){
      initialize();
    }, 100);
  }

})();
