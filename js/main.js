var app = angular.module("myApp",[]);


app.controller('IncController', function($scope){
	$scope.incidencias = [
		{nombre:"Fontanero",estado:"Abierta"},
		{nombre:"Albañileria",estado:"cerrada"}
	];
});
