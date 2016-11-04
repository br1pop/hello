(function(global) {
	//"use strict";
    
   angular.module("myApp").controller("mapaCtrl", function($scope, Data, $ionicModal, $location,$ionicScrollDelegate){    
       
            function verMapa(ver){
                //$scope.verMapa=false;
                if(ver){                    
                    document.getElementById("map").style.display="block";
                    document.getElementById("perfil").style.display="none";
                }else{
                    document.getElementById("map").style.display="none";
                    document.getElementById("perfil").style.display="inline";
                }
            }
            

            
            ///////////////////////////
            //Modal Datos de Marcador//
           ///////////////////////////
            
            $scope.openModal = function(){
              $ionicModal.fromTemplateUrl('views/perfil_estudio.html', {
                    scope: $scope,
                    animation: 'slide-in-up',
                    focusFirstInput: true
                }).then(function(modal) {
                    $scope.modal = modal;
                    $scope.modal.show();
                    $scope.modal
                  console.log($scope.marcador);
                }); 
                
            };
            
            $scope.closeModal = function() {
                $scope.modal.hide();
            };
                   
    });
         
})();
