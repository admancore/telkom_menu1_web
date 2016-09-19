/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard_fix.regional', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard_fix.regional', {
          url: '/dashboard_regional',
          templateUrl: 'app/pages/dashboard_fix/regional/regional.html',
          title: 'Regional 7',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
