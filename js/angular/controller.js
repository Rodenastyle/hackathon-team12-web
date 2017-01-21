var app = angular.module('mgcrea.ngStrapDocs', [ 'mgcrea.ngStrap', 'ngStorage'])
.controller("controlador", function($scope, $location, $window,  $http, $sessionStorage) {
	$scope.hola = "HOLAAAAA";
	$scope.hoteles = [];
	$scope.hola = function(){
		$scope.hoteles.push("img/portfolio/cabin.png");
		$scope.hoteles.push("img/portfolio/cake.png");
		$scope.hoteles.push("img/portfolio/circus.png");
		$scope.hoteles.push("img/portfolio/game.png");
		$scope.hoteles.push("img/portfolio/safe.png");
		$scope.hoteles.push("img/portfolio/submarine.png");
	
	}
	$scope.hola();

});

