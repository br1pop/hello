(function(){
	"use strict";
	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/principal");

		$stateProvider

        .state("principal", {
			url:"/principal",
            templateUrl:"views/principal.html",
            controller:"principalCtrl"
		})
        
                .state("principal.mapa", {
                    url:"/mapa",
                    views:{
                        'menuContent':{
                            templateUrl:"views/mapa.html",
                            controller:"mapaCtrl"
                        }
                    }
                })
        
                .state("principal.cambiar_perfil", {
                    url:"/cambiar_perfil",
                    views:{
                        'menuContent':{
                            templateUrl:"views/cambiar_perfil.html",
                            controller:"perfilesCtrl"
                        }
                    }
                })

                .state("cambiar_perfil", {
                    url:"/cambiar_perfil",
                    templateUrl:"views/cambiar_perfil.html",
                    controller:"perfilesCtrl"
                })

                .state("notificaciones", {
                    url:"/notificaciones",
                    templateUrl:"views/notificaciones.html",
                    controller:"notificacionesCtrl"
                })


	});
})();
