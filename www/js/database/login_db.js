(function(){
	"use strict";
	angular.module("myApp").value("LoginDB",{
		db:null,
		initLogin: function() {
			this.db = window.openDatabase("LOGINDB", "1.0", "LoginDB", 2000);
			this.db.transaction(function(res) {
				res.executeSql("CREATE TABLE IF NOT EXISTS logueado(user TEXT, email TEXT, pass TEXT);", []);
			});
		}
	});
})();
