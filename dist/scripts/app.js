(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
        .html5Mode({
          enabled: true,
          requireBase: false
        });
    $stateProvider
        .state('lists', {
          url: '/list/:listName',
          controller: 'ListCtrl',
          templateUrl: '/templates/list.html'
        }),
    $stateProvider
        .state('welcome', {
          url: '/',
          controller: 'ListCtrl',
          templateUrl: '/templates/welcome.html'
        });

  }

  angular
      .module('blocItOff', ['ui.router', 'firebase', 'ui.bootstrap'])
      .config(config);
})();