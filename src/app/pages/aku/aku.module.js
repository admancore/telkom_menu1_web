(function () {
  'use strict';

  angular.module('BlurAdmin.pages.aku', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('aku', {
          url: '/pelanggan',
          templateUrl: 'app/pages/aku/a-k-u.html',
          controller: 'aku.Ctrl',
          title: 'Pelanggan',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 800,
          },
        });
  }

})();
