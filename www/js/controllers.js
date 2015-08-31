'use strict';

/* Controllers */

var dumaControllers = angular.module('dumaApp.controllers',[]);

dumaControllers.controller('SignupCtrl',['$scope','$rootScope',
	function($scope, $rootScope) {
		$rootScope.title = 'Employer Signup';
		$rootScope.sub_title = 'Free Account';
		$rootScope.slim_title = '';
		$scope.user = {};
		$scope.createEmployerAccount = function(user) {
			console.log(angular.toJson(user));
		}
	}]
);

dumaControllers.controller('LoginCtrl',['$scope','$rootScope',
	function($scope, $rootScope) {
		$rootScope.title = 'Employer Login';
		$rootScope.sub_title = 'Login to access dashboard';
		$rootScope.slim_title = '';
		$scope.login = function(user) {
			console.log(angular.toJson(user));
		}
	}]
);

dumaControllers.controller('CompanyProfileCtrl',['$scope','$rootScope',
	function($scope, $rootScope) {
		$rootScope.title = 'Company Profile';
		$rootScope.sub_title = 'Update Company Profile to access Employer Dashboard';
		$rootScope.slim_title = '';
	}]
);

dumaControllers.controller('EmployerDashboardCtrl',['$scope','$rootScope',
	function($scope, $rootScope) {
		$rootScope.title = '';
		$rootScope.sub_title = '';
		$rootScope.slim_title = 'Dashboard';
	}]
);
