(function() {
	function config($urlRouterProvider, $stateProvider, $locationProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
				url: '/',
				controller: 'HomeCtrl',
				templateUrl: '/templates/home.html'
			})
		// .state('todo', {
		// 		url: '/',
		// 		controller: 'TodoCtrl',
		// 		templateUrl: '/templates/todo.html'
		// 	})
			.state('list', {
				url: '/list/:listName',
				controller: 'ListCtrl',
				templateUrl:'/templates/list.html'
			});

	};
	angular
		.module('blocItOff', ['ui.router', 'firebase', 'ui.bootstrap'])
		.config(config);
})();