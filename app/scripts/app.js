(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
        .html5Mode({
          enabled: true,
          requireBase: false
        });
    $stateProvider
        .state('lists', {
          url: '/',
          controller: 'ListCtrl',
          templateUrl: '/templates/home.html'
        });
  }

  angular
      .module('blocItOff', ['ui.router', 'firebase', 'ui.bootstrap'])
      .config(config);
})();