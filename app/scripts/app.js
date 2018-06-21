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
        }),
    $stateProvider
      .state('newList', {
        url: '/new-list',
        controller: 'ListCtrl',
        templateUrl: '/templates/newList.html'
      });
  }

  angular
      .module('blocItOff', ['ui.router', 'firebase'])
      .config(config);
})();