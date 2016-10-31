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

                //Marcadores
                var estoyAqui = new google.maps.Marker({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: latLng,
                    title: "Estoy Aqui"
                });   
                var markers=[];
                
                //Recibo json con marcadores desde api
                Data.getMarcadores().success(function(data) {
                    for(var i = 0; i<data.length; i++){ 
                        markers[i] = data[i];
                    }
                }); 
                console.log(markers);
                
                var infoWindow = new google.maps.InfoWindow();
                for (var i = 0; i < markers.length; i++) {
                    var data = markers[i];
                    var latLng = new google.maps.LatLng(data.lat, data.lng);
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        icon:"http://miplomo.com/"+data.icono,
                        map: map,
                        clickable: true,
                        customInfo: data
                    });
 
                }
                
                
                        
                        google.maps.event.addListener(marker, 'click', function() {
                            alert(marker.customInfo.nombre);
                        });
                    
                       
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
