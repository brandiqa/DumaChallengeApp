'use strict';

/* Controllers */

var dumaControllers = angular.module('dumaApp.controllers',[]);

dumaControllers.controller('SignupCtrl',['$scope','$rootScope',
	function($scope, $rootScope) {
		$rootScope.title = 'Employer Signup';
		$rootScope.sub_title = 'Free Account';
		$scope.user = {};
		$scope.createEmployerAccount = function(user) {
			console.log(angular.toJson(user));
		}
	}]
);