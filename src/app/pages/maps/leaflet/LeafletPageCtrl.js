/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.maps')
      .controller('LeafletPageCtrl', LeafletPageCtrl);

  /** @ngInject */
  function LeafletPageCtrl($scope, $timeout, $http) {
    function initialize() {
      L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet/dist/images';
      var map = L.map(document.getElementById('leaflet-map')).setView([-5.162223, 119.437690], 13);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      var ok =$http.get("http://127.0.0.1:3636/rute/wa0108").then(function (response){
        for (var i = 0; i < response.length; i++)
          {
            console.log(response.length);
            L.marker([response[i].koordinat[i]]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
          }
      });
      console.log(ok);

/*
      L.marker([51.5, -0.09]).addTo(map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
          L.marker([53.5, -0.05]).addTo(map)
              .bindPopup('Admancore was here.<br> Easily customizable.')
              .openPopup();
*/
    }

    $timeout(function(){
      initialize();
    }, 100);

  }

})();
