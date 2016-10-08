'use strict';

/**
 * @ngdoc function
 * @name profileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profileApp
 */
angular.module('profileApp')
  .controller('MainCtrl', ['$rootScope', function ($rootScope) {
	  $rootScope.backStyle={'border-color': 'rgba(255, 255, 255, 0)', 'background': 'rgba(255, 255, 255, 0)'};
	  

	  $rootScope.obj1={'color':'#72AB00', 'border-top-color': '#72AB00'};
	  $rootScope.obj2={'color':'#3E3333','border-top-color': '#3E3333'};
	  $rootScope.obj3={'color':'#3E3333','border-top-color': '#3E3333'};
  
  }]);
