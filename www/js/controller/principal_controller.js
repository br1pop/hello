(function(global) {
	//"use strict";
    
   angular.module("myApp").controller("principalCtrl", function($scope,$rootScope, Data, $ionicModal, 
                            $location, $ionicSideMenuDelegate){
       
       //se guarda el usuario logueado
       $rootScope.logueado;
       $rootScope.titulo_principal = "Mi Plomo";
       $scope.verPerfiles = function(){
           $location.url("principal/cambiar_perfil");
       }
       
       $scope.inicializarMapa = function(){
            Data.inicializarMapa();
       }
       
         $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
          };
        
       $scope.$on('actualizarPerfil', function(event, data) {
            $scope.titulo= data;
            $scope.tipo =data.data.perfil;
            document.getElementById("perfil").style.visibility="visible";
            document.getElementById("map").style.visibility="hidden";

        })
       
    });
         
})();