(function(global) {
	//"use strict";
    angular.module("myApp").value("Config", {
		getUrl: "http://miplomo.com/"
	});
   
    angular.module("myApp").controller("perfilProfesorCtrl", function($scope,$rootScope, Data, $ionicModal, 
                            $location, $ionicSideMenuDelegate, Config){
        
       
        $scope.$on('actualizarPerfilProfesor', function(event, data) {
            
            profesor= data.data;
            $rootScope.titulo_principal = profesor.nombre;
            document.getElementById("map").style.visibility="hidden";
            document.getElementById("perfil_estudio").style.visibility="hidden";
            document.getElementById("perfil_profesor").style.visibility="visible";
            var bgUrl = Config.getUrl+profesor.imagen;
            
            $scope.background={
                        'background-image':'url(' + bgUrl.replace("thumbs","") + ')'
            }; 
            
            $scope.$apply();
        })
    
    
        
    });     
})();