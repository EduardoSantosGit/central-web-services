angular.module('app')
.controller('InicioController', function($scope,$http,$location){


      $scope.redirecionaCorreios = function(){

            $location.path('/correios');

      };


});
