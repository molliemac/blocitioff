(function() {
	function config($urlRouterProvider, $stateProvider, $locationProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
				url: '/',
				controller: 'HomeCtrl as home',
				templateUrl: '/templates/home.html'
			})
			.state('list', {
				url: '/list/:title',
				controller: 'ListCtrl as list',
				templateUrl:'/templates/list.html'
			});

	};
	angular
		.module('blocItOff', ['ui.router', 'firebase'])
		.config(config);
})();