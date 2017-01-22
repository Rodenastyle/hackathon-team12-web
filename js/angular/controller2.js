var app = angular.module('mgcrea.ngStrapDocs', [ 'mgcrea.ngStrap', 'ngStorage'])
.controller("controlador2", function($scope, $window, $http) {
	$scope.hoteles = [];
	$scope.idCartoDB = "";

	$scope.hola = function(){
		$scope.hoteles = [{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"}];
	
	}
	$scope.hola2 = function(){
		$scope.hoteles = [{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Málaga", img: "img/portfolio/cake.png"},{id: 1, nombre: "Córdoba", img: "img/portfolio/circus.png"},{id: 1, nombre: "Jaén", img: "img/portfolio/game.png"},{id: 1, nombre: "Cádiz", img: "img/portfolio/safe.png"},{id: 1, nombre: "Sevilla", img: "img/portfolio/submarine.png"},{id: 1, nombre: "Huelva", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Almería", img: "img/portfolio/cabin.png"}];
	
	}

	$scope.eee = function(id){
		alert(id);
		$scope.hola2();
		$scope.idCartoDB = id;
	}

	$scope.hola();

});

