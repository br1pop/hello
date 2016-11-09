(function(){
	"use strict";

	angular.module("myApp").value("Config", {
		getUrl: "http://miplomo.com/"
	});

	angular.module("myApp").service("perfilServiciosServices", function($http,$rootScope, Config){
        
        this.get = function(){
            alert("asd");    
        }
    });
    
})();