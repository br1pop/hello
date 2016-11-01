(function(global) {
	//"use strict";
    
   angular.module("myApp").controller("ppalCtrl", function($scope,$rootScope, Data, $ionicModal, $location, DBLocal, DBLocalLoginDeUsuario, $ionicSideMenuDelegate){
       
       //se guarda el usuario logueado
       $rootScope.logueado;
       
       $scope.verPerfiles = function(){
           $location.url("ppal/perfiles");
       }
       
         $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
          };
       
    });
         
})();