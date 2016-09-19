/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tiket_list')
      .controller('tiket_list.Ctrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $http, $filter, editableOptions, editableThemes) {
    $scope.smartTablePageSize = 10;
    $scope.tableInit = false;

    $http.get("http://127.0.0.1:8008/tiket_all/").then(function (response){
      $scope.smartTableData = response.data;
      $scope.tableInit = true;
    });

  }

})();
