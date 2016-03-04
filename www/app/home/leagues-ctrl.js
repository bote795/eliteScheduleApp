(function() {
	'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('eliteApp').controller('LeaguesCtrl', 
		['$state', 'eliteApi', 
		function($state, eliteApi){
			var vm =this;
			 eliteApi.getLeagues().then(function(data) {
			 	vm.leagues = data;	
			 });

			//vm.leagues = leagues;

			vm.selectLeague = function (leagueId) {
				//TODO: select correct league
				eliteApi.setLeagueId(leagueId);
				$state.go("app.teams");
			}
	}])
})();