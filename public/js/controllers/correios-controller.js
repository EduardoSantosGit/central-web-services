angular.module('app')
.controller('CorreiosController', function($scope,$http,$location){


      $scope.redirecionaServicoPrazo = function(){

          $location.path('');

      };


});
