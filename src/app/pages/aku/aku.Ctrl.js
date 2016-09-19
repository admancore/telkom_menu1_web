/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.aku')
      .controller('aku.Ctrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $http, $filter, editableOptions, editableThemes) {
    $scope.smartTablePageSize = 10;
    $scope.tableInit = false;

    $http.get("http://dev.wasdlabs.com:3636/pelanggan/").then(function (response){
      $scope.smartTableData = response.data;
      $scope.tableInit = true;
      console.log($scope.smartTableData);
    });


  //  $scope.editableTableData = $scope.smartTableData.slice(0, 36);
    $scope.peopleTableData = [
      {
        id: 1,
        firstName: 'Mark',
        lastName: 'Otto',
        username: '@mdo',
        email: 'mdo@gmail.com',
        age: '28',
        status: 'info'
      },
      {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thornton',
        username: '@fat',
        email: 'fat@yandex.ru',
        age: '45',
        status: 'primary'
      },
      {
        id: 3,
        firstName: 'Larry',
        lastName: 'Bird',
        username: '@twitter',
        email: 'twitter@outlook.com',
        age: '18',
        status: 'success'
      },
      {
        id: 4,
        firstName: 'John',
        lastName: 'Snow',
        username: '@snow',
        email: 'snow@gmail.com',
        age: '20',
        status: 'danger'
      },
      {
        id: 5,
        firstName: 'Jack',
        lastName: 'Sparrow',
        username: '@jack',
        email: 'jack@yandex.ru',
        age: '30',
        status: 'warning'
      }
    ];


  }

})();
