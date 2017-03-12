angular.module('app')
.controller('CorreiosController', function($scope,$http,$location){

      $scope.modalPrazodias = false;
      $scope.prazodias = {};
      $scope.prazodata = {};

      $scope.calculaPrazoDias = function(){

        $http.post('/correios/calculaPrazoDias',$scope.prazodias)
            .then(function(res){
                  if(res.status == 200){
                    $scope.resPrazo = res.data.CalcPrazoResult.Servicos.cServico[0];
                  }
            }, function(error){
                console.log(error);
            });
      };

      $scope.calculaPrazoData = function(){

        $http.post('/correios/calculaPrazoData', $scope.prazodata)
              .then(function(res){
                if(res.status == 200){
                  $scope.resPrazoData = res.data.CalcPrazoDataResult.Servicos.cServico[0];
                }
              }, function(error){
                  console.log(error);
              });
       };


});
