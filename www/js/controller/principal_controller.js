(function(global) {
	//"use strict";
    
   angular.module("myApp").controller("principalCtrl", function($scope,$rootScope, Data, $ionicModal, 
                            $location, $ionicSideMenuDelegate){
       
       //se guarda el usuario logueado
       $rootScope.logueado;
       
       $scope.verPerfiles = function(){
           $location.url("principal/cambiar_perfil");
       }
       
       $scope.inicializarMapa = function(){
            Data.inicializarMapa();
           
       $scope.titulo = $rootScope.markerActual.nombre
       }
       
         $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
          };
       
    });
         
})();