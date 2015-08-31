// Employer Dashboard App

angular.module('dumaApp',[
	'ui.router',
	'ui.bootstrap',
	'dumaApp.controllers',
	'dumaApp.services'])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider

		.state('home', {
			url: '/',
			templateUrl: 'templates/signup.htm',
			controller: 'SignupCtrl'
		})
})
