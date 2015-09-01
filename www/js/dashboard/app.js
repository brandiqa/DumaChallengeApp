// Employer Dashboard Module

angular.module('dumaDashboardApp',[
	'ui.router',
	'ui.bootstrap',
	'dumaDashboardApp.controllers',
	'dumaDashboardApp.services',
	'angular.directives-round-progress'])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider

		.state('jobs-panel', {
			url: '/',
			templateUrl: 'templates/dashboard/jobs-panel.htm',
			controller: 'JobsPanelCtrl'
		})
		.state('jobs-list', {
			url: '/jobs-list',
			templateUrl: 'templates/dashboard/jobs-list.htm',
			controller: 'JobsListCtrl'
		})
})
