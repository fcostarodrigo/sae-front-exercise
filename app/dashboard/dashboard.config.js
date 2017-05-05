(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('login.dashboard', {
      url: 'painel',
      templateUrl: '/app/dashboard/dashboard.html'
    });
  }

})();