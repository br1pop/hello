(function(){
	"use strict";
	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/home");

		$stateProvider

		.state("home", {
			url:"/home",
            templateUrl:"views/home.html",
            controller:"initCtrl"
		})
        
        .state("cambiarPerfil", {
			url:"/home",
            templateUrl:"views/cambiarPerfil.html",
            controller:"initCtrl"
		})


	});
})();
