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
                            templateUrl:"views/mapa.html"
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
        
                .state("principal.nuevo_perfil_categorias", {
                    url:"/nuevo_perfil_categorias",
                    views:{
                        'menuContent':{
                            templateUrl:"views/nuevo_perfil_categorias.html",
                            controller:"perfilesCtrl"
                        }
                    }
                })

                .state("notificaciones", {
                    url:"/notificaciones",
                    templateUrl:"views/notificaciones.html",
                    controller:"notificacionesCtrl"
                })


                .state("principal.perfil_musico", {
                    url:"/perfil_musico",
                    views:{
                        'menuContent':{
                            templateUrl:"views/perfil_musico.html"
                        }
                    }
                })
	});
})();
