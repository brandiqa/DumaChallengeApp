// Common App Modules

angular.module('dumaApp',[
	'ui.router',
	'ui.bootstrap',
	'ngAnimate',
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
		.state('login', {
			url: '/login',
			templateUrl: 'templates/login.htm',
			controller: 'LoginCtrl'
		})
		.state('companyProfile', {
			url: '/company-profile',
			templateUrl: 'templates/company-profile.htm',
			controller: 'CompanyProfileCtrl'
		})
})
