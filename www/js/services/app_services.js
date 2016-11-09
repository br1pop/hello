(function(){
	"use strict";

	angular.module("myApp").value("Config", {
		getUrl: "http://miplomo.com/"
	});

	angular.module("myApp").service("Data", function($http,$rootScope, Config, perfilServiciosServices){
        var map;
        var latLng;
        var cantMarcadores;
        var estoyAqui;
        
        this.inicializarMapa = function (){
            
            var onSuccess = function(position) {
                //titulo de header
                $rootScope.titulo_principal = "Mapa de servicios";
                //creo objeto LatLng con posicion actual
                latLng= new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                
                //Si el mapa no fue cargado anteriormente lo cargo
                //junto con los marcadores de servicios
                if(map == null){
                    cargarMapa(latLng);
                }else{
                    //Muestro div mapa. Oculto div perfil
                    document.getElementById("map").style.visibility="visible";
                    document.getElementById("perfil_estudio").style.visibility="hidden";
                    document.getElementById("perfil_profesor").style.visibility="hidden";
                }
                
                //Marcador de Posicion actual.
                //Se actualiza cada vez que pido el mapa
                
                //Borro marcador de posicion anterior si existe
                if(estoyAqui !=null) estoyAqui.setMap(null);
                
                //Agrego marcador de posicion actual
                estoyAqui = new google.maps.Marker({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: latLng,
                    title: "Estoy Aqui"
                }); 
                
                //Centro el mapa a la posicion actual
                map.setCenter(latLng);
            }
            
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }

            navigator.geolocation.getCurrentPosition(onSuccess,onError);
        }    

        
        function cargarMapa(latLng){
            //Defino mapa
            var mapOptions = {
              zoom: 15,
              draggable: true,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };


            map = new google.maps.Map(document.getElementById("map"),mapOptions);

            //Recibo json con marcadores desde api
            //Cargo los marcadores en el mapa
            
            $http({
				method: "GET",
				url: Config.getUrl+"CI/index.php/Rest/Marcadores",
				headers : {
				    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(function successCallback(data){
                    var marcadores = data.data;
                    var marker;
                    cantMarcadores = marcadores.length;
                    for(var i = 0; i<cantMarcadores; i++){ 
                        var datos = marcadores[i];
                        var latLng = new google.maps.LatLng(datos.lat, datos.lng);
                        
                        marker = new google.maps.Marker({
                            position: latLng,
                            icon:"http://miplomo.com/"+datos.icono,
                            map: map,
                            clickable: true,
                            customInfo: datos 
                        })
                        
                        google.maps.event.addListener(marker, 'click', (function(marker, i) {
                             return function() {
                                //aqui se va a abrir la ventana con la info del maracador.
                                //Se oculta el mapa y se muestra el perfil del marcador. 
                                 var perfil = marker.customInfo.perfil;
                                 if(perfil == "Estudio Musical"){
                                    $rootScope.$broadcast('actualizarPerfilEstudio', {
                                        data: marker.customInfo
                                    });  
                                 }else if(perfil == "Profesor"){
                                    $rootScope.$broadcast('actualizarPerfilProfesor', {
                                        data: marker.customInfo
                                    }); 
                                 }

                             }
                        })(marker, i));  
                    }  
            });
            
        }    
	
    
    });
    
})();
