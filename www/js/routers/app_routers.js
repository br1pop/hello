(function(){
	"use strict";
	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/ppal");

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
        
        .state("perfiles", {
			url:"/perfiles",
            templateUrl:"views/perfiles.html",
            controller:"perfilesCtrl"
		})


	});
})();
