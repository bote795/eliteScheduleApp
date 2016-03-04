(function() {
	'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('eliteApp').controller('LocationsCtrl', 
		['eliteApi', 
		function(eliteApi){
			var vm =this;
			var data= eliteApi.getLeagueData().then(function(data){
				vm.locations = data.locations;
			});
	}])
})();