(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
		.state('home', {
				url: '/',
				controller: 'HomeCtrl as home',
				templateUrl: '/templates/home.html'
			})
			.state('list', {
				url: '/list',
				controller: 'ListCtrl as list',
				templateUrl:'/templates/list.html'
			});

	};
	angular
		.module('blocItOff', ['ui.router', 'firebase'])
		.config(config);
})();