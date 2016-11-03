(function(global) {
	//"use strict";
    
   angular.module("myApp").controller("pushCtrl", function($scope, Data, $ionicModal, $location,$ionicScrollDelegate){

        document.addEventListener('deviceready', function () {
          // Enable to debug issues.
          // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

          var notificationOpenedCallback = function(jsonData) {
            //console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
          };

          window.plugins.OneSignal
            .startInit("32baa084-fdec-4746-90b7-cba790fc576f", "485368879107")
            .handleNotificationOpened(notificationOpenedCallback)
            .endInit();

          // Sync hashed email if you have a login system or collect it.
          //   Will be used to reach the user at the most optimal time of day.
          // window.plugins.OneSignal.syncHashedEmail(userEmail);
        
     
        }, false); 
                   
    });
         
})();
