angular.module('app')
.controller('CepController', function($scope,$http){

    $scope.viaCep = {};

    $scope.buscaCep = function(){

        $http.post('/cep', $scope.viaCep)
            .then(function(res){

            }, function(error){

            });

    };

});
