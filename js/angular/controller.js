var app = angular.module('mgcrea.ngStrapDocs', [ 'mgcrea.ngStrap'])
.controller("controlador", function($scope, $window, $http) {
	$scope.hotel = "";
	$scope.hoteles = [];
	$scope.idCartoDB = "";


	$scope.hola = function(){
		$scope.hoteles = [{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"}];
	
	}
	$scope.hola2 = function(){
		$scope.hoteles = [{id: 1, nombre: "Granada", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Málaga", img: "img/portfolio/cake.png"},{id: 1, nombre: "Córdoba", img: "img/portfolio/circus.png"},{id: 1, nombre: "Jaén", img: "img/portfolio/game.png"},{id: 1, nombre: "Cádiz", img: "img/portfolio/safe.png"},{id: 1, nombre: "Sevilla", img: "img/portfolio/submarine.png"},{id: 1, nombre: "Huelva", img: "img/portfolio/cabin.png"},{id: 1, nombre: "Almería", img: "img/portfolio/cabin.png"}];
	
	}
	$scope.hola3 = function(){
		alert("3");
		$scope.hoteles = [{id: '<a href="#portfolioModal1" class="portfolio-link" data-toggle="modal"><div class="caption"><div class="caption-content"><i class="fa fa-search-plus fa-3x"></i></div></div><div style="text-align: center; font-size: 25px; background-color: #FFF">{{hotel.nombre}}</div><img src="{{hotel.img}}" class="img-responsive" alt=""></a>'}];
	}
	$scope.eee = function(id){
		//alert(id);
		//$scope.hola2();
		$scope.hotel.id = 1;
		$scope.hotel.nombre = "Granada";
		$scope.hotel.img = "img/portfolio/cabin.png";
		$("#portfolioModal1").modal("show");
	}


	$scope.ss = function(){
		alert("ss");
		
	}



	//$scope.hola();

});

