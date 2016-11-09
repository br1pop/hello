(function(global) {
	//"use strict";
    angular.module("myApp").value("Config", {
		getUrl: "http://miplomo.com/"
	});
   
    angular.module("myApp").controller("perfilEstudioCtrl", function($scope,$rootScope, Data, $ionicModal, 
                            $location, $ionicSideMenuDelegate, Config){

        $scope.mostrarDetalleEnsayo =false;
        $scope.mostrarDetalleGrabacion =false;
        $scope.mostrarDetalleAlquiler =false;
        $scope.mostrarInfoGeneral =true;
        $scope.verCruzCerrar = false;
        $scope.$on('actualizarPerfilEstudio', function(event, data) {
            
            //Tomo el objeto estudio que viene desde el click en el map marker
            //Enviado desde el servicio por medio de broadcast. 
            estudio= data.data;
            $rootScope.titulo_principal = estudio.nombre;
            
            //Oculto mapa y muestro perfil
            document.getElementById("map").style.visibility="hidden";
            document.getElementById("perfil_estudio").style.visibility="visible";
            document.getElementById("perfil_profesor").style.visibility="hidden";
            
            //Cargo foto de perfil 
            var bgUrl = Config.getUrl+estudio.imagen;
            $scope.background={
                        'background-image':'url(' + bgUrl.replace("thumbs","") + ')'
            }; 
            
            $scope.servicios;
            
            //Iconos servicio
            $scope.icono_grabacion = estudio.prestacionesMobile.grabacion;
            $scope.icono_ensayo = estudio.prestacionesMobile.ensayo;
            $scope.icono_alquilerEquipo = estudio.prestacionesMobile.alquiler;

            //Cargo Informacion general del estudio.
            //Primera pantalla de informacion cuando carga
            $scope.subtitulo = "Informacion General";
            
            if(estudio.descripcion==""){
                "No hay descripcion ingresada por el usuario";
            }else{
                $scope.descripcion = estudio.descripcion;   
            }
            
            //Aplico los cambios del scope para que refresque
            $scope.$apply();
        })
        
        
        //Metodos para mostrar/ocultar informacion
        $scope.verDetallesEnsayo = function(){
            $scope.subtitulo = "Sala de ensayo";
            $scope.verCruzCerrar = true;
            $scope.mostrarDetalleEnsayo =true;
            $scope.mostrarDetalleGrabacion =false;
            $scope.mostrarDetalleAlquiler =false;
            $scope.mostrarInfoGeneral =false;
            $scope.$apply();
        }
        $scope.verDetallesGrabacion = function(){
            $scope.subtitulo = "Grabacion en estudio";
            $scope.verCruzCerrar = true;
            $scope.mostrarDetalleEnsayo =false;
            $scope.mostrarDetalleGrabacion =true;
            $scope.mostrarDetalleAlquiler =false;
            $scope.mostrarInfoGeneral =false;
            $scope.$apply();
        }
        $scope.verDetallesAlquiler = function(){
            $scope.subtitulo = "Alquiler de equipos";
            $scope.verCruzCerrar = true;
            $scope.mostrarDetalleEnsayo =false;
            $scope.mostrarDetalleGrabacion =false;
            $scope.mostrarDetalleAlquiler =true;
            $scope.mostrarInfoGeneral =false;
            $scope.$apply();
        }
        
        $scope.cerrarDetallesEstudio = function(){
            $scope.subtitulo = "Informacion General";
            $scope.verCruzCerrar = false;
            $scope.mostrarDetalleEnsayo =false;
            $scope.mostrarDetalleGrabacion =false;
            $scope.mostrarDetalleAlquiler =false;
            $scope.mostrarInfoGeneral =true;
        }
    
        
        
    });     
})();