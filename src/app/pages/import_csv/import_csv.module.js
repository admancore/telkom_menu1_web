(function () {
  'use strict';

  angular.module('BlurAdmin.pages.import_csv', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('import_csv', {
          url: '/import_csv',
          templateUrl: 'app/pages/import_csv/import_csv.html',
          controller: 'import_csv.Ctrl',
          title: 'Import File',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 900,
          },
        });
  }

})();
