(function() {
	'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('eliteApp').controller('TeamsCtrl', 
		['$scope', 'eliteApi', 
		function($scope,eliteApi){
			var vm =this;
			vm.loadList = function(forceRefresh){
				 eliteApi.getLeagueData().then(function(data) {
	 				vm.teams = data.teams;
				 }).finally(function(){
				 	$scope.$broadcast('scroll.refreshComplete');
				 });
			} 
			vm.loadList(false);
	}])
})();