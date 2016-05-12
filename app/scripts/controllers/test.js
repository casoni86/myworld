'use strict';

angular.module('lucaAppApp')
    .controller('LucaCtrl', ['$scope', function($scope) {
      $scope.data = [
        { text:'dato1',value:'1'},
        { text:'dato2',value:'2'},
        { text:'dato3',value:'3'},
        { text:'dato4',value:'4'},
        { text:'dato5',value:'5'}
      ];
    }]);