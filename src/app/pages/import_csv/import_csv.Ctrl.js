/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.import_csv')
      .controller('import_csv.Ctrl', ImportCsvCtrl);

  /** @ngInject */
  function ImportCsvCtrl($scope, $http, $parse) {

    $scope.csv = {
    	content: null,
    	header: true,
    	headerVisible: true,
    	separator: ',',
    	separatorVisible: true,
    	result: null,
    	encoding: 'ISO-8859-1',
    	encodingVisible: true,
    };

    var _lastGoodResult = '';
    $scope.toPrettyJSON = function (json, tabWidth) {
			var objStr = JSON.stringify(json);
			var obj = null;
			try {
				obj = $parse(objStr)({});
			} catch(e){
				// eat $parse error
				return _lastGoodResult;
			}

			var result = JSON.stringify(obj, null, Number(tabWidth));
			_lastGoodResult = result;

			return result;
    };
    $scope.csvCallback = function (result) {
console.log($scope.csv.result.length);
    for (var i = 0; i < $scope.csv.result.length; i++) {
      var data_tiket = JSON.stringify($scope.csv.result[i]);
      $http.post("http://127.0.0.1:8008/insert_data_tiket/", data_tiket).then(function(data_tiket, status) {

      })
    }
    }
  }

})();
