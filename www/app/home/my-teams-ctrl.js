(function() {
	'use strict';

	angular.module('eliteApp').controller('MyTeamsCtrl', ['$state','$scope','$rootScope','myTeamsService', 'eliteApi' , myTeamsCtrl]);

	function myTeamsCtrl($state, $scope, $rootScope,  myTeamsService, eliteApi) {
		var vm = this;
		
		vm.myTeams = myTeamsService.getFollowedTeams();

		vm.goToTeam = function(team){
			eliteApi.setLeagueId(team.leagueId);
			$state.go("app.team-detail", { id: team.id });
		};
	    $rootScope.$on('event:data-change', function() {
	    	vm.myTeams = myTeamsService.getFollowedTeams();
		});

	 };
})();