/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard_fix.nasional', [])
      .config(routeConfig).config(chartJsConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard_fix.nasional', {
          url: '/dashboard_nasional',
          templateUrl: 'app/pages/dashboard_fix/nasional/nasional.html',
          title: 'Nasional',
          sidebarMeta: {
            order: 200,
          },
        });
  }

  function chartJsConfig(ChartJsProvider, baConfigProvider) {
    var layoutColors = baConfigProvider.colors;
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: [ layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.default, layoutColors.primaryDark, layoutColors.successDark, layoutColors.warningLight, layoutColors.successLight, layoutColors.primaryLight],
      responsive: true,
      scaleFontColor: layoutColors.defaultText,
      scaleLineColor: layoutColors.border,
      pointLabelFontColor: layoutColors.defaultText
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: true
    });
  }

})();
