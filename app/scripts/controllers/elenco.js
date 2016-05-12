'use strict';

angular.module('lucaAppApp')
    .controller('ElencoCtrl', ['$scope', '$http', '$interval','$timeout', function ($scope, $http, $interval, $timeout) {
            $scope.testTextModel='che ora è?';
            $scope.corse= [];
            $http({
                method : 'GET',
                url : 'http://shark04.altervista.org/test.php'
            }).then(
            function mySucces(response) {
                angular.forEach( response.data, function(value) {
                  $scope.corse.push(value);
                });
            }, function myError(response) {
                $scope.corse = response.statusText;
            });

            $timeout(function () {
                $interval(function () {
                  $scope.testTextModel = new Date().toLocaleTimeString();
                }, 1000);
            }, 8000);
     }]);

