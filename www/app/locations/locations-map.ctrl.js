(function() {
	'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('eliteApp').controller('LocationCtrl', 
		[ '$stateParams',
		function($stateParams){
			var vm =this;
			vm.locationId = Number($stateParams.id);
			vm.map = {
				center: {
					latitude: 38.897677,
					longitude: -77.036530
				},
				zoom: 12
			};
			vm.marker = {};
	}])
})();