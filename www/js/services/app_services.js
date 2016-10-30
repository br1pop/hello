(function(){
	"use strict";

	angular.module("myApp").value("Config", {
		getUrl: "http://miplomo.com/"
	});

	angular.module("myApp").service("Data", function($http, Config){
		//recuperação de dados
		this.getMarcadores = function(){
			return $http({
				method: "GET",
				url: Config.getUrl+"CI/index.php/Rest/Marcadores",
				headers : {
				    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			});
		};

	});
})();
