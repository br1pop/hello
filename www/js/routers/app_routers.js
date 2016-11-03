(function(){
	"use strict";
	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/notificaciones");

		$stateProvider

		.state("home", {
			url:"/home",
            templateUrl:"views/home.html",
            controller:"initCtrl"
		})
        
        .state("mapa", {
			url:"/mapa",
            templateUrl:"views/mapa.html",
            controller:"mapaCtrl"
		})
    
        .state("ppal", {
			url:"/ppal",
            templateUrl:"views/ppal.html",
            controller:"ppalCtrl"
		})
        
        .state("ppal.mapa", {
            url:"/mapa",
            views:{
            'menuContent':{
                templateUrl:"views/mapa.html"
            }
            }
        })

        .state("ppal.perfiles", {
            url:"/perfiles",
            views:{
                'menuContent':{
                    templateUrl:"views/perfiles.html",
                    controller:"perfilesCtrl"
                }
            }
        })
        
        .state("perfiles", {
			url:"/perfiles",
            templateUrl:"views/perfiles.html",
            controller:"perfilesCtrl"
		})
        
        .state("notificaciones", {
			url:"/notificaciones",
            templateUrl:"views/notificaciones.html",
            controller:"notificacionesCtrl"
		})


	});
})();
