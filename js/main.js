var app = angular.module("myApp",[]);


app.controller('IncController', function($scope){
	$scope.incidencias = [
		{nombre:"Incidencia 1",estado:"Abierta"},
		{nombre:"Incidencia 2",estado:"Cerrada"}
	];
});
