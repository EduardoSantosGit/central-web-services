angular.module('app')
.controller('CepController', function($scope,$http){

    $scope.viaCep = {};
    $scope.resEndereco = {};

    $scope.buscaCep = function(){

        $http.post('/cep', $scope.viaCep)
            .then(function(res){
              if(res.status == 200){
                $scope.resEndereco = res.data;
              }
            }, function(error){

            });

    };

});
