(function(global) {
	//"use strict";
    
   angular.module("myApp").controller("initCtrl", function($scope, Data, $ionicModal, $location, DBLocal, DBLocalLoginDeUsuario,$ionicScrollDelegate){

        document.addEventListener('deviceready', function () {
          // Enable to debug issues.
          // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

          var notificationOpenedCallback = function(jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
          };

          window.plugins.OneSignal
            .startInit("32baa084-fdec-4746-90b7-cba790fc576f", "485368879107")
            .handleNotificationOpened(notificationOpenedCallback)
            .endInit();

          // Sync hashed email if you have a login system or collect it.
          //   Will be used to reach the user at the most optimal time of day.
          // window.plugins.OneSignal.syncHashedEmail(userEmail);
        
            var onSuccess = function(position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var mapOptions = {
                  center: latLng,
                  zoom: 15,
                  draggable: true,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(document.getElementById("map"),mapOptions);

                
                var marker = new google.maps.Marker({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: latLng,
                    title: "Estoy Aqui"
                });                   
 
                Data.getMarcadores().success(function(data) {
                    for(var i = 0; i<data.length; i++){ 
                        var latLng = new google.maps.LatLng(data[i].lat, data[i].lng);
                        new google.maps.Marker({
                            map: map,
                            animation: google.maps.Animation.DROP,
                            position: latLng,
                            icon:"http://miplomo.com/"+data[i].icono
                        });
                    }
                }); 
                
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });

                var titulo = "Alto Voltaje";
                var perfil="Estudio";
                var contentString = "pepe";/*'<div id="content">'+
                  '<h1 id="firstHeading" class="firstHeading">'+titulo+'</h1>'+
                  '<div id="bodyContent">'
                    +perfil+
                  '</div>'+
                  '</div>';*/        
            }
            //google.maps.event.addDomListener(window, 'load', initialize);
                   
        
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }

            navigator.geolocation.getCurrentPosition(onSuccess,onError);
 
        }, false); 
                   
    });
         
})();
