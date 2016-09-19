/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard_fix', [
    'BlurAdmin.pages.dashboard_fix.nasional',
    'BlurAdmin.pages.dashboard_fix.regional',
  ])
      .config(routeConfig).config(chartJsConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard_fix', {
          url: '/dashboard_fix',
          abstract: true,
          template: '<div ui-view></div>',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 150,
          },
        });
  }

})();
