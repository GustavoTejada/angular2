(function(){
	"use strict";
	var app = angular.module("newsApp")
	.factory(
		"newsService",
		function($http){
			var service = {
				getAll: function(){
					return $http.get("https://newsapi.org/v2/top-headlines?apiKey=efcc28d29c11454981da076a73be2af5&country=ar");
				}
				// delete:
			}

			return service;
		})
}());