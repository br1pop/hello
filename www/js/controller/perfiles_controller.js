(function(global) {
	//"use strict";
    
   angular.module("myApp").controller("perfilesCtrl", function($scope,$rootScope, Data, $ionicModal, $location){
    //$scope.usuario = $rootScope.logueado;   
       $scope.cambiarPerfil = function(){
            $location.url("principal/cambiar_perfil");  
        }  
       
        $scope.nuevoPerfil = function(){
           $location.url("principal/nuevo_perfil_categorias");
       }
    });
    
})();