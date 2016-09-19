(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tiket_list', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('tiket_list', {
          url: '/tiket_list',
          templateUrl: 'app/pages/tiket_list/tiket_list.html',
          controller: 'tiket_list.Ctrl',
          title: 'Tiket List',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 800,
          },
        });
  }

})();
