'use strict';

angular.module('lucaAppApp')
    .controller('Test2Ctrl',['$scope', function($scope) {
      $scope.sortType     = 'name'; // set the default sort type
      $scope.sortReverse  = false;  // set the default sort order
      $scope.searchNeidoWorker   = '';     // set the default search/filter term
      
      // create the list of sushi rolls 
      $scope.neido = [
        { name: 'Luca', wtype: 'Ferretti', tastiness: 30 },
        { name: 'Andrea', wtype: 'Dagnino', tastiness: 42 },
        { name: 'Massy', wtype: 'Sacco', tastiness: 18 },
        { name: 'Paolo', wtype: 'Carati', tastiness: 500 },
        { name: 'Fabio', wtype: 'Fabbrini', tastiness: 145 },
        { name: 'Silvia', wtype: 'Fantu', tastiness: 148 }
      ];
  
    }]);