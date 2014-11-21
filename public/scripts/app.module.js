(function() {
	'use strict';

	angular
		.module('app', [
			'ngRoute'
		])
		.config(config);

	function config($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/partials/data.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
	}

})();