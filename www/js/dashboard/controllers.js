'use strict';

/* Controllers */

var dumaControllers = angular.module('dumaDashboardApp.controllers',[]);

dumaControllers.controller('HeaderNavCtrl',['$scope','$location',
	function($scope, $location) {
		$scope.isActive = function(viewLocation) {
			return viewLocation == $location.path();
		}
	}]
);

dumaControllers.controller('JobsPanelCtrl',['$scope',
	function($scope) {
		$scope.newJobs = {
			label: 2,
			percentage: 8
		}

		$scope.$watch('newJobs', function (newValue) {
			newValue.percentage = newValue.label / 8;
		}, true);

		$scope.ongoingJobs = {
			label: 3,
			percentage: 8
		}

		$scope.$watch('ongoingJobs', function (newValue) {
			newValue.percentage = newValue.label / 8;
		}, true);

		$scope.waitingJobs = {
			label: 1,
			percentage: 8
		}

		$scope.$watch('waitingJobs', function (newValue) {
			newValue.percentage = newValue.label / 8;
		}, true);

		$scope.completeJobs = {
			label: 2,
			percentage: 8
		}

		$scope.$watch('completeJobs', function (newValue) {
			newValue.percentage = newValue.label / 8;
		}, true);
	}]
);

dumaControllers.controller('JobsListCtrl',['$scope',
	function($scope) {
	}]
);
