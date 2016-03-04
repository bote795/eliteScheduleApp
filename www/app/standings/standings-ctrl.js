(function() {
	'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('eliteApp').controller('StandingsCtrl', 
		['eliteApi', 
		function(eliteApi){
			var vm =this;
			eliteApi.getLeagueData().then(function(data){
				vm.standings = data.standings;	
			});
			
	}])
})();