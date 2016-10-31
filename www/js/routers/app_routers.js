(function(){
	"use strict";
	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/mapa");

		$stateProvider

		.state("home", {
			url:"/home",
            templateUrl:"views/home.html",
            controller:"initCtrl"
		})
        
        .state("mapa", {
			url:"/mapa",
            templateUrl:"views/mapa.html",
            controller:"initCtrl"
		})


	});
})();
