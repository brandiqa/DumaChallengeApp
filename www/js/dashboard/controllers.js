'use strict';

/* Controllers */

var dumaControllers = angular.module('dumaDashboardApp.controllers',[]);

dumaControllers.controller('HeaderCtrl',['$scope','$location',
	function($scope, $location) {
		$scope.isActive = function(viewLocation) {
			return viewLocation == $location.path();
		}
	}]
);

dumaControllers.controller('JobsPanelCtrl',['$scope',
	function($scope) {
		$scope.jobs = 'My Jobs';
		console.log('JobsPanelCtrl');
	}]
);

dumaControllers.controller('JobsListCtrl',['$scope',
	function($scope) {
		console.log('JobsListCtrl');
	}]
);