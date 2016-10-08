'use strict';

/**
 * @ngdoc function
 * @name profileApp.controller:CvCtrl
 * @description
 * # CvCtrl
 * Controller of the profileApp
 */
angular.module('profileApp')
  .controller('CvCtrl', ['$rootScope', function ($rootScope){
     $rootScope.backStyle={'border-color': 'rgba(255, 255, 255, 0)', 'background': 'rgba(255, 255, 255, 0.85)'};
	 $rootScope.obj1={'color':'#3E3333','border-top-color': '#3E3333'};
  $rootScope.obj2={'color':'#72AB00', 'border-top-color': '#72AB00'};
  $rootScope.obj3={'color':'#3E3333','border-top-color': '#3E3333'};
  
  }]);
