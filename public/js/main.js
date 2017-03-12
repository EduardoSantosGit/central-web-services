angular.module('app', ['ngAnimate','ngRoute'])
.config(function($routeProvider){

  $routeProvider.when('/', {
			templateUrl: 'views/inicio.html',
			controller: 'InicioController'
	});

  $routeProvider.when('/correios', {
     templateUrl: 'views/correios.html',
     controller: 'CorreiosController'
  });

});
