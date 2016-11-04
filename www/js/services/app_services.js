(function(){
	"use strict";

	angular.module("myApp").value("Config", {
		getUrl: "http://miplomo.com/"
	});

	angular.module("myApp").service("Data", function($http,$rootScope, Config){

        
        this.inicializarMapa = function (){
            
            var latLng;
            var onSuccess = function(position) {
                latLng= new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                cargarMapa(latLng);
                document.getElementById("map").style.visibility="visible";
                document.getElementById("perfil").style.visibility="hidden";
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
                  center: latLng,
                  zoom: 15,
                  draggable: true,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };


                var map = new google.maps.Map(document.getElementById("map"),mapOptions);

                //Marcador de Posicion actual
                var estoyAqui = new google.maps.Marker({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: latLng,
                    title: "Estoy Aqui"
                });   
                
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
                    var cantMarcadores = marcadores.length;
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
                                 //aqui se va a abrir la ventana con la info del maracador
                                 //alert(marker.customInfo.nombre);
                                    $rootScope.markerActual = marker.customInfo;
                                    document.getElementById("map").style.visibility="hidden";
                                    document.getElementById("perfil").style.visibility="visible";
                             }
                        })(marker, i));  
                    }  
            });
            
        }    
	
    
    });
    
})();
