(function(global) {
	//"use strict";
    
   angular.module("myApp").controller("mapaCtrl", function($scope, Data, $ionicModal, $location, DBLocal, DBLocalLoginDeUsuario,$ionicScrollDelegate){

        document.addEventListener('deviceready', function () {
        
            var onSuccess = function(position) {
                
                //Tomo Posicion actual de geolocalizacion
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                
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
                Data.getMarcadores().success(function(data) {
                    for(var i = 0; i<data.length; i++){ 
                        var datos = data[i];
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
                                $scope.markerActual = marker.customInfo;
                                $scope.openModal();
                             }
                        })(marker, i));  
                    }          
                });
            }
        
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }

            navigator.geolocation.getCurrentPosition(onSuccess,onError);
            
            
            ///////////////////////////
            //Modal Datos de Marcador//
           ///////////////////////////
            
            $scope.openModal = function(){
              $ionicModal.fromTemplateUrl('views/modal_marker.html', {
                    scope: $scope,
                    animation: 'slide-in-up',
                    focusFirstInput: true
                }).then(function(modal) {
                    $scope.modal = modal;
                    $scope.modal.show();
                  console.log($scope.marcador);
                }); 
                
            };
            
            $scope.closeModal = function() {
                $scope.modal.hide();
            };

        }, false); 
                   
    });
         
})();
