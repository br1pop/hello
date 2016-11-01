(function(global) {
	//"use strict";
    
   angular.module("myApp").controller("ppalCtrl", function($scope,$rootScope, Data, $ionicModal, $location, DBLocal, DBLocalLoginDeUsuario){
       
       $scope.verPerfiles = function(){
           $location.url("/perfiles");
       }
       
    });
         
})();