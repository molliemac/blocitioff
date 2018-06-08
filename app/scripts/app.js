(function() {
	function config($locationProvider, $stateProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('active', {
				url: '/',
				controller: 'ActiveCtrl as active',
				templateUrl:'/templates/activeTasks.html'
			})
			.state('completed', {
				url: '/completed',
				templateUrl: '/templates/completedTasks.html'
			});
	}
	angular
		.module('blocItOff', ['ui.router', 'firebase'])
		.config(config);
})();