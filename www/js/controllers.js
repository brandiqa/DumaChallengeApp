'use strict';

/* Controllers */

var dumaControllers = angular.module('dumaApp.controllers',[]);

dumaControllers.controller('SignupCtrl',['$scope',
	function($scope) {
		$scope.user = new Employer({});
		$scope.createEmployerAccount = function(user) {
			console.log(user);
		}
	}]
);