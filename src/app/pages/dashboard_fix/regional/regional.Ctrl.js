/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard_fix.regional')
      .controller('regional.Ctrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $http, $filter, editableOptions, editableThemes) {
    $http.get("http://127.0.0.1:8008/regional/metro/").then(function (response){
      $scope.metroTableData = response.data;
      $scope.tableInit = true;
    });

    $http.get("http://127.0.0.1:8008/regional/radio/").then(function (response){
      $scope.radioTableData = response.data;
      $scope.tableInit = true;
    });

    $http.get("http://127.0.0.1:8008/regional/sldigital/").then(function (response){
      $scope.sldigitalTableData = response.data;
      $scope.tableInit = true;
    });

    $http.get("http://127.0.0.1:8008/regional/ekstrim/").then(function (response){
      $scope.ekstrimTableData = response.data;
      $scope.tableInit = true;
    });

  }

})();
