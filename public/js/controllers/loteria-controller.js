angular.module('app')
.controller('LoteriaController', function($scope,$http){

    $scope.mega = {};
    $scope.resMega = {};

    $scope.buscaMegaSena = function(){

        $http.post('/loteria', $scope.mega).
          then(function(res){
            if(res.status == 200){
                $scope.resMega = res.data;
            }
          }, function(error){

          });

    };


});
