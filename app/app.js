(function(){
	"use strict";
	var app = angular.module("newsApp",["ui.router"]);

	app.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise("/")

		$stateProvider
		.state(
			"home",{
				url: "/",
				templateUrl: "app/views/home.html"
			})
		.state(
			"newsIndex",{
				url: "/news",
				templateUrl: "app/views/news/index.html",
				controller: "newsController as vm"
			})
	});

}());